import {AdSampleFields} from "./components/pages/filter_pages/ad_sample_page/ad_sample_list.tsx";
import {DlSampleFields} from "./components/pages/filter_pages/dl_sample_page/dl_sample_list.tsx";

export function toHexDisplay(value: number): string {
    return "0x" + value.toString(16).padStart(2, '0').toUpperCase();
}

export function getRelevantSignals(fields: AdSampleFields | DlSampleFields) {
    if (!fields) {
        return [];
    }
    return fields.filter(f => !["reserved", "Device id"].includes(f.field.name)).map(f => f.field.name);
}
