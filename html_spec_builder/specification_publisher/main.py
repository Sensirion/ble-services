from __future__ import annotations
import shutil
import pathlib
from functools import partial
from typing import Final

import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape
from specification_publisher.filter import TESTS, FILTERS, GLOBALS

_specification_root: pathlib.Path = pathlib.Path(__file__).parent.parent.parent  # root folder of the yml specification
_template_root: pathlib = pathlib.Path(__file__).parent.parent / 'templates'
_static_root: pathlib = pathlib.Path(__file__).parent.parent / 'static'

_services_spec: Final[str] = 'ble-services.yml'
_sample_types_spec: Final[str] = 'ble-sample-types.yml'
_out_dir = _specification_root / 'output'


def build_html():
    service_spec = yaml.safe_load((_specification_root / _services_spec).read_text())
    sample_type_spec = yaml.safe_load((_specification_root / _sample_types_spec).read_text())

    _out_dir.mkdir(parents=True, exist_ok=True)
    env = Environment(
        loader=FileSystemLoader(_template_root.absolute()),
        autoescape=select_autoescape())

    env.filters.update(FILTERS)

    env.tests.update(TESTS)
    env.globals.update(GLOBALS)

    template = env.get_template("ble-specification-template.html")
    render_context = {'service_spec': service_spec,
                      'sample_spec': sample_type_spec}
    static_output = _out_dir / 'static'
    if static_output.exists():
        shutil.rmtree(static_output, ignore_errors=True)
    shutil.copytree(_static_root, static_output)
    with open(_out_dir / "index.html", "w") as f:
        f.write(template.render(render_context))


if __name__ == "__main__":
    build_html()
