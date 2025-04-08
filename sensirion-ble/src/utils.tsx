import {AdSampleFields} from "./components/pages/ble_info_page/samples/ad_samples/ad_sample_list.tsx";
import {DlSampleFields} from "./components/pages/ble_info_page/samples/dl_samples/dl_sample_list.tsx";

export function toHexDisplay(value: number): string {
    return "0x" + value.toString(16).padStart(2, '0').toUpperCase();
}

export function getRelevantSignals(fields: AdSampleFields | DlSampleFields) {
    if (!fields) {
        return [];
    }
    return fields.filter(f => !["reserved", "Device id"].includes(f.field.name)).map(f => f.field.name);
}
