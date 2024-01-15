from functools import partial
from typing import List, Dict, Any, Final, Optional

from docutils.core import publish_parts


def name_to_id(name: str) -> str:
    return name.lower().replace(' ', '_')


def sizeof(type_name: str) -> int:
    type_name_list = list(type_name)
    match type_name_list:
        case list('float'):
            return 4
        case list('uint'), [x]:
            return x
        case [*_, 'i', 'n', 't', x]:
            return int(x) // 8
        case [*_, 'i', 'n', 't', x, y]:
            return int(f'{x}{y}') // 8
        case [*_, '[', x, ']']:
            return int(x) // 8
        case [*_, '[', x, y, ']']:
            return int(f'{x}{y}')
        case _:
            return 0


def as_html(rst_txt: str, style_class: str) -> str:
    html_txt = publish_parts(source=rst_txt, writer_name='html5_polyglot')['html_body']
    html_txt = html_txt.replace('<main>', f'<div class="{style_class}">')
    html_txt = html_txt.replace('</main>', f'</div>')
    return html_txt


def id_to_sample_number(id_bytes: List[int]) -> int:
    match id_bytes:
        case [0, x]:
            return x
        case [0xFF, 0]:
            return 0
        case _:
            return id_bytes[0] | id_bytes[1] << 8


def is_advertisement_sample(id_bytes: List[int]) -> bool:
    return 0 == id_bytes[0] or 0xFF == id_bytes[0]


def has_access_property(access_properties: List[str], name) -> bool:
    try:
        return access_properties.index(name) >= 0
    except ValueError:
        ...
    return False


def yesno(value: bool) -> str:
    input_template = '<input type="checkbox" {0}/>'
    checked = 'checked' if value else ''
    return input_template.format(checked)


def well_known_service(service_item: Dict[str, Any]) -> bool:
    return 'ble-sig-reference' in service_item


def documented_with_app_note(service_item: Dict[str, Any]) -> bool:
    return 'application-note' in service_item


def conversion_formula(field_info: Optional[Dict[str, str]]) -> str:
    if 'conversion' not in field_info:
        return ''
    return field_info['conversion']['formula']


def sample_fields(sample_type: Dict[str, Any]) -> List[str]:
    id = sample_type['id']
    sample_bytes = []
    if is_advertisement_sample(id):
        sample_bytes.extend([f'AdvType={id[0]}', f'SampleType={id[1]}'])
    else:
        sample_bytes.extend([f'SampleType-LSB={id[0]}', f'SampleType-MSB={id[1]}'])
    if 'fields' not in sample_type:
        return sample_bytes
    fields = sample_type['fields']
    for entry in fields:
        field = entry['field']
        prefix = field['name']
        nr_of_bytes = sizeof(field['data-type'])
        field_bytes = []
        if nr_of_bytes > 1:
            field_bytes.append(f'{prefix}-LSB')
            for i in range(1, nr_of_bytes - 1):
                suffix = i
                field_bytes.append(f'{prefix}-{suffix}')
            field_bytes.append(f'{prefix}-MSB')
        else:
            field_bytes.append(f'{prefix}-0')
        sample_bytes.extend(field_bytes)
    return sample_bytes


FILTERS: Final[Dict[str, Any]] = {'id_2_number': id_to_sample_number,
                                  'as_html': as_html, 'yesno': yesno,
                                  'sizeof': sizeof,
                                  'name_2_id': name_to_id,
                                  'conversion_formula': conversion_formula}

TESTS: Final[Dict[str, Any]] = {'advertisement_sample': is_advertisement_sample,
                                'well_known_service': well_known_service,
                                'documented_with_app_note': documented_with_app_note,
                                'read_access': partial(has_access_property, name='read'),
                                'write_access': partial(has_access_property, name='write'),
                                'notify': partial(has_access_property, name='notify')
                                }

GLOBALS: Final[Dict[str, Any]] = {'sample_fields': sample_fields}
