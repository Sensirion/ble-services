// @ts-expect-error: untyped object import
import samples from "../../../../resources/ble-ad-sample-types.yml";
import type {SampleTypes} from "../../../../types/ble-sample-types-adv-schema";
import {Dialog} from "radix-ui";
import {SearchCriterias} from "../../../../types/search-criterias.d.tsx";
import {useContext, useState} from "react";
import {FilterContext} from "../common/contexts.tsx";
import AdSampleContent from "./ad_sample_content.tsx";
import SampleHeader from "../common/samples/sample_header.tsx";
import {
    getByteSizeFromNumberOfFields,
    getMergedGadgetsAndSensorsFromSample,
    getRelevantSignals,
    toHexDisplay
} from "../../../../utils.tsx";

export type AdSample = SampleTypes["sample-types"][number]["sample-type"];
export type AdSampleId = AdSample["id"];
export type AdSampleFields = AdSample["fields"];

const advSamples = samples as SampleTypes;

function AdvertisementSampleList() {
    const fContext = useContext(FilterContext);
    const [selected_sample, set_selected_sample] = useState(filterAdvertisementSampleList(fContext.filters)?.[0]?.["sample-type"]);

    function filterAdvertisementSampleList(filters: SearchCriterias) {
        let filteredSamples = [...advSamples["sample-types"]]
        // Filter on "Gadget" select according the suitable-for in sample
        if (filters.selectedGadget != undefined) {
            filteredSamples = filteredSamples.filter(s =>
                s["sample-type"]["suitable-for"]?.gadgets?.includes(filters.selectedGadget!));
        }
        // Filter on "Signals" select according the fields in sample
        if (filters.selectedSignals.length > 0) {
            const selSign = new Set(filters.selectedSignals);
            filteredSamples = filteredSamples.filter(s => {
                const sampleSignals = new Set(s["sample-type"].fields?.map(f => f.field.name));
                return selSign.isSubsetOf(sampleSignals);
            });
        }
        // Filter on "Sensors" select according the suitable-for in sample
        if (filters.selectedSensors.length > 0) {
            const selSensor = new Set(filters.selectedSensors);
            filteredSamples = filteredSamples.filter(s => {
                const sampleSensors = new Set(s["sample-type"]["suitable-for"]?.sensors);
                return selSensor.isSubsetOf(sampleSensors);
            });
        }
        return filteredSamples;
    }

    const hexId = (id: AdSampleId) => {
        return "[" +
            toHexDisplay(Number(id["ad-type"])) +
            ", " +
            toHexDisplay(Number(id["sample-type"])) +
            "]";
    }

    return <Dialog.Root>
        <div className="dialog_trigger_list">
            {filterAdvertisementSampleList(fContext.filters).map((s, index) => {
                const relevantSignals = getRelevantSignals(s["sample-type"].fields)
                return <Dialog.Trigger key={index} asChild>
                    <SampleHeader
                        name={s["sample-type"].description}
                        hexId={hexId(s["sample-type"].id)}
                        signals={relevantSignals}
                        sampleType={s["sample-type"].id["sample-type"]}
                        gadgetsAndSensors={getMergedGadgetsAndSensorsFromSample(s["sample-type"])}
                        sampleByteSize={getByteSizeFromNumberOfFields(s["sample-type"].fields?.length || 0)}
                        onClick={() => set_selected_sample(s["sample-type"])}
                        className="dialog_trigger_list__entry"
                    />
                </Dialog.Trigger>
            })}
        </div>

        <Dialog.Portal>
            <Dialog.Overlay className="dialog_overlay"/>
            <Dialog.Content className="dialog_content" aria-describedby={undefined}>
                <Dialog.Title className="dialog_title">{selected_sample.description}</Dialog.Title>
                <Dialog.Close asChild>
                    <button className="dialog_close_button" aria-label="Close">X</button>
                </Dialog.Close>
                <AdSampleContent content={selected_sample}/>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}

export default AdvertisementSampleList
