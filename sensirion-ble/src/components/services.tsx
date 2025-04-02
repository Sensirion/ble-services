import NavigationBar from "./navbar.tsx";
import FooterBar from "./footer.tsx";
import type {BLEServiceSchemaDefinition} from "../types/ble-service-schema.d.ts";
import {Select, Accordion} from "radix-ui";

// @ts-expect-error: untyped object import
import services from "../resources/ble-services.yml";
import "./services.css";
import {ChevronIcon} from "./vectors/chevronIcon.tsx";

const bleServices = services as BLEServiceSchemaDefinition;

function FilterSelectGadget() {
    return (
        <div className="services__filter_select">
            <label>Gadget</label>
            <Select.Root>
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select a gadget…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                <Select.Item className="filter__select_item" value="1">
                                    <Select.ItemText>SHT Gadget</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                                <Select.Item className="filter__select_item" value="2">
                                    <Select.ItemText>SHT43 demo board</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                            </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton className="SelectScrollButton"></Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}

function FilterSelectSignalType() {
    return (
        <div className="services__filter_select">
            <label>Signal Type</label>
            <Select.Root>
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select signal types…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                <Select.Item className="filter__select_item" value="1">
                                    <Select.ItemText>Temperature</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                                <Select.Item className="filter__select_item" value="2">
                                    <Select.ItemText>Humidity</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                            </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton className="filter__select_scroll_button"></Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}

function FilterSelectSensor() {
    return (
        <div className="services__filter_select">
            <label>Sensor</label>
            <Select.Root>
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select a sensor…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                <Select.Item className="filter__select_item" value="1">
                                    <Select.ItemText>SHT3x</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                                <Select.Item className="filter__select_item" value="2">
                                    <Select.ItemText>SHT4x</Select.ItemText>
                                    <Select.ItemIndicator
                                        className="filter__select_item_indicator"></Select.ItemIndicator>
                                </Select.Item>
                            </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton className="filter__select_scroll_button"></Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}

function ServicesPage() {
    return (
        <>
            <NavigationBar/>
            <div id="body" className="services__container">
                <div className="services__filter_area">
                    <FilterSelectGadget/>
                    <FilterSelectSignalType/>
                    <FilterSelectSensor/>
                </div>

                <h1>BLE Services</h1>
                <p>
                    This section describes what services are available, their UUID and the
                    exposed characteristics. Services that are public BLE services have a
                    link to download the BLE Service specification.
                </p>
                <div>
                    <Accordion.Root type="single">
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
                </div>
                <h1>Sample Types</h1>
                <p>
                    There are different sample types in use depending on whether it is a
                    live data stream or a data download stream.
                </p>
            </div>

            <FooterBar/>
        </>
    );
}

export default ServicesPage;
