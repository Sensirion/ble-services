import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../vectors/chevronIcon.tsx";
import "./accordion.css"

// @ts-expect-error: untyped object import
import services from "../../../resources/ble-services.yml";
import type {BLEServiceSchemaDefinition} from "../../../types/ble-service-schema";

const bleServices = services as BLEServiceSchemaDefinition;

function ServicesList() {
    return <Accordion.Root type="single">
        {bleServices["ble-services"].map((s, i) => {
            return (
                <Accordion.Item value={"service-" + i} className="accordion">
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
