import Select from 'react-select'
import "./filters.css"
import {useContext} from "react"
import {FilterContext} from "./contexts.tsx"

function FilterSelectGadget() {
    const fContext = useContext(FilterContext);
    const gadgetOptions: { value: string, label: string }[] = [
        {value: 'Smart Humigadget', label: 'Smart Humigadget'},
        {value: 'SHT40 Gadget', label: 'SHT40 Gadget'},
        {value: 'SHT43 Demo Board', label: 'SHT43 Demo Board'},
        {value: 'MyCo2 Gadget', label: 'MyCo2 Gadget'},
        {value: 'AQ Minion', label: 'AQ Minion'},
    ]
    return (
        <div className="services__filter_select">
            <label>Gadget</label>
            <Select
                options={gadgetOptions}
                onChange={(newValue, _actionMeta) => {
                    fContext.setFilters({
                        ...fContext.filters,
                        selectedGadget: newValue?.value});
                    }
                }
                isClearable={true}
            />
        </div>
    );
}

function FilterSelectSignalType() {
    const fContext = useContext(FilterContext);
    const signalOptions: { value: string, label: string }[] = [
        {value: 'Temperature', label: 'Temperature'},
        {value: 'Humidity', label: 'Humidity'},
        {value: 'CO2', label: 'CO2'},
        {value: 'PM2.5', label: 'PM2.5'},
        {value: 'VOC', label: 'VOC'},
        {value: 'NOx', label: 'NOx'},
        {value: 'AV', label: 'AV'},
    ]
    return (
        <div className="services__filter_select">
            <label>Signal Type</label>
            <Select
                isMulti={true}
                options={signalOptions}
                onChange={(newValue, _actionMeta) => {
                    fContext.setFilters({
                        ...fContext.filters,
                        selectedSignals: newValue.map(selected => selected.value)
                    })
                }}
            />
        </div>
    );
}

function FilterSelectSensor() {
    const fContext = useContext(FilterContext);
    const sensorOptions: { value: string, label: string }[] = [
        {value: 'SHT3x sensors', label: 'SHT3x'},
        {value: 'SHT4x sensors', label: 'SHT4x'},
        {value: 'CO2 sensors', label: 'CO2'},
        {value: 'Formaldehyde sensors', label: 'Formaldehyde'},
        {value: 'SGP40 sensor', label: 'SGP40'},
        {value: 'SGP41 sensor', label: 'SGP41'},
        {value: 'SEN50 module', label: 'SEN50'},
        {value: 'SEN54 module', label: 'SEN54'},
        {value: 'SEN55 module', label: 'SEN55'},
        {value: 'SEN60 module', label: 'SEN60'},
        {value: 'SEN63C module', label: 'SEN63C'},
        {value: 'SEN66 module', label: 'SEN66'},
        {value: 'SEN65 module', label: 'SEN65'},
    ]
    return (
        <div className="services__filter_select">
            <label>Sensor</label>
            <Select
                isMulti={true}
                options={sensorOptions}
                onChange={(newValue, _actionMeta) => {
                    fContext.setFilters({
                        ...fContext.filters,
                        selectedSensors: newValue.map(selected => selected.value)
                    })
                }}/>
        </div>
    );
}

export type FilterTypes =('gadget' | 'signal' | 'sensor')[];

interface FilterAreaProps {
    filters: FilterTypes
}

function FilterArea({filters}: FilterAreaProps) {
    return (<div className="services__filter_area">
        {filters.includes('gadget') ? <FilterSelectGadget/> : null}
        {filters.includes('signal') ? <FilterSelectSignalType/> : null}
        {filters.includes('sensor') ? <FilterSelectSensor/> : null}
    </div>);
}

export default FilterArea;
