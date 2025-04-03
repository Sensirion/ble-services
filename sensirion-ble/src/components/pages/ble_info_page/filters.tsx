import {Select} from "radix-ui";
import "./filters.css"
import {useContext} from "react";
import {FilterContext} from "./contexts.tsx";

const availableGadgets: string[] = ['Smart Humigadget', 'SHT40 Gadget', 'SHT43 Demo Board', 'MyCo2 Gadget', 'AQ Minion']
const availableSignals: string[] = ['Temperature', 'Humidity', 'CO2', 'PM2.5', 'VOC', 'NOx', 'AV']
const availableSensors: string[] = ['SHT3x', 'SHT4x']


function FilterSelectGadget() {
    const fContext = useContext(FilterContext);
    return (
        <div className="services__filter_select">
            <label>Gadget</label>
            <Select.Root
                onValueChange={(e) => fContext.setFilters({...fContext.filters, 'selectedGadget': e})}
                defaultValue={fContext.filters.selectedGadget}
            >
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select a gadget…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                {
                                    availableGadgets.map((g, i) => {
                                        return <Select.Item className="filter__select_item" value={g}
                                                            key={"gadget-" + i}>
                                            <Select.ItemText>{g}</Select.ItemText>
                                            <Select.ItemIndicator
                                                className="filter__select_item_indicator"></Select.ItemIndicator>
                                        </Select.Item>
                                    })
                                }
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
    const fContext = useContext(FilterContext);
    return (
        <div className="services__filter_select">
            <label>Signal Type</label>
            <Select.Root
                onValueChange={(e) => fContext.setFilters({...fContext.filters, 'selectedSignals': [e]})}
                defaultValue={fContext.filters.selectedSignals[0]}
            >
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select signal types…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                {
                                    availableSignals.map((s, i) => {
                                        return <Select.Item className="filter__select_item" value={s}
                                                            key={"signal-" + i}>
                                            <Select.ItemText>{s}</Select.ItemText>
                                            <Select.ItemIndicator
                                                className="filter__select_item_indicator"></Select.ItemIndicator>
                                        </Select.Item>
                                    })
                                }
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
    const fContext = useContext(FilterContext);
    return (
        <div className="services__filter_select">
            <label>Sensor</label>
            <Select.Root
                onValueChange={(e) => fContext.setFilters({...fContext.filters, 'selectedSensor': [e]})}
                defaultValue={fContext.filters.selectedSensor[0]}
            >
                <Select.Trigger className="filter__select_trigger" aria-label="Food">
                    <Select.Value placeholder="Select a sensor…"/>
                    <Select.Icon className="filter__select_icon"></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className="filter__select_content">
                        <Select.ScrollUpButton className="filter__select_scroll_button"></Select.ScrollUpButton>
                        <Select.Viewport className="filter__select_viewport">
                            <Select.Group>
                                {
                                    availableSensors.map((s, i) => {
                                        return <Select.Item className="filter__select_item" value={s}
                                                            key={"sensor-" + i}>
                                            <Select.ItemText>{s}</Select.ItemText>
                                            <Select.ItemIndicator
                                                className="filter__select_item_indicator"></Select.ItemIndicator>
                                        </Select.Item>
                                    })
                                }
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
