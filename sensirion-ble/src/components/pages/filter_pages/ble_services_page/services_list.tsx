import {useContext, useState} from "react";
import {Dialog} from "radix-ui";
import "../common/dialog.css"

// @ts-expect-error: untyped object import
import services from "../../../../resources/ble-services.yml";
import type {BLEServiceSchemaDefinition} from "../../../../types/ble-service-schema";
import ServiceInfoContent from "./service_info_content.tsx";
import ServiceInfoHeader from "./service_info_header.tsx";
import {FilterContext} from "../common/contexts.tsx";
import {SearchCriterias} from "../../../../types/search-criterias.d.tsx";

const bleServices = services as BLEServiceSchemaDefinition;

function ServicesList() {
    const fContext = useContext(FilterContext);
    const [selected_service, set_selected_service] = useState(filterServicesList(fContext.filters)?.[0]?.service);

    // Filter on "Gadget" select according the implemented_by in characteristics list
    function filterServicesList(filters: SearchCriterias) {
        if (filters.selectedGadget != undefined) {
            return bleServices["ble-services"].filter(s =>
                s.service["supported-characteristics"].filter(c =>
                    c.characteristic["implemented-by"]?.includes(filters.selectedGadget!)).length > 0);
        }
        return bleServices["ble-services"];
    }

    return <Dialog.Root>
        <div className="dialog_trigger_list">
            {filterServicesList(fContext.filters).map((s, index) => {
                return <Dialog.Trigger key={index} asChild>
                    <ServiceInfoHeader
                        name={s.service.name}
                        isCustom={!s.service["ble-sig-reference"]}
                        numberOfCharacteristics={s.service["supported-characteristics"].length}
                        uuid={s.service.uuid}
                        onClick={() => set_selected_service(s.service)}
                        className="dialog_trigger_list__entry"
                    />
                </Dialog.Trigger>
            })}
        </div>

        <Dialog.Portal>
            <Dialog.Overlay className="dialog_overlay"/>
            <Dialog.Content className="dialog_content" aria-describedby={undefined}>
                <Dialog.Title className="dialog_title">{selected_service.name}</Dialog.Title>
                <Dialog.Close asChild>
                    <button className="dialog_close_button" aria-label="Close">X</button>
                </Dialog.Close>
                <ServiceInfoContent content={selected_service}/>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>

}


export default ServicesList;
