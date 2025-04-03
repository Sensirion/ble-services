import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../vectors/chevronIcon.tsx";
import "./accordion.css"

// @ts-expect-error: untyped object import
import services from "../../../resources/ble-services.yml";
import type {BLEServiceSchemaDefinition} from "../../../types/ble-service-schema";
import {useContext} from "react";
import {FilterContext} from "./contexts.tsx";
import {SearchCriterias} from "../../../types/search-criterias.d.tsx";

const bleServices = services as BLEServiceSchemaDefinition;

function ServicesList() {
    const fContext = useContext(FilterContext);

    // Filter on "Gadget" select according the implemented_by in characteristics list
    function filterServicesList(filters: SearchCriterias) {
        if (filters.selectedGadget != undefined) {
            return bleServices["ble-services"].filter(s =>
                s.service["supported-characteristics"].filter(c =>
                    c.characteristic["implemented-by"]?.includes(filters.selectedGadget!)).length > 0);
        }
        return bleServices["ble-services"];
    }

    return <Accordion.Root type="single">
        {filterServicesList(fContext.filters).map((s, i) => {
            return (
                <Accordion.Item value={"service-" + i} className="accordion" key={"service-" + i}>
                    <Accordion.Header className="accordion__header">
                        <Accordion.Trigger className="accordion__header__trigger">
                            <div>{s.service.name}</div>
                            <ChevronIcon
                                className="accordion__header__chevron"
                                aria-hidden
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion__content">
                        {JSON.stringify(s.service)}
                    </Accordion.Content>
                </Accordion.Item>
            );
        })}
    </Accordion.Root>
}


export default ServicesList;
