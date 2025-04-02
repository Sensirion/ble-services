import {Select} from "radix-ui";
import "./filters.css"

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

function FilterArea() {
    return <div className="services__filter_area">
        <FilterSelectGadget/>
        <FilterSelectSignalType/>
        <FilterSelectSensor/>
    </div>
}

export default FilterArea;
