import {AdSample, AdSampleFields} from "./components/pages/filter_pages/ad_sample_page/ad_sample_list.tsx";
import {DlSample, DlSampleFields} from "./components/pages/filter_pages/dl_sample_page/dl_sample_list.tsx";

export function toHexDisplay(value: number): string {
    return "0x" + value.toString(16).padStart(2, '0').toUpperCase();
}

export function getRelevantSignals(fields: AdSampleFields | DlSampleFields) {
    if (!fields) {
        return [];
    }
    return fields.filter(f => !["reserved", "Device id"].includes(f.field.name)).map(f => f.field.name);
}

export const getByteSizeFromNumberOfFields = (numberOfFields: number) => {
    return numberOfFields * 2 + 2;
}

export const getMergedGadgetsAndSensorsFromSample = (sample: AdSample | DlSample) => {
    const suitableFor = sample["suitable-for"];
    const gadgetsAndSensor = [];
    if (suitableFor?.gadgets) {
        gadgetsAndSensor.push(...suitableFor.gadgets);
    }
    if (suitableFor?.sensors) {
        gadgetsAndSensor.push(...suitableFor.sensors);
    }
    return gadgetsAndSensor;
}
