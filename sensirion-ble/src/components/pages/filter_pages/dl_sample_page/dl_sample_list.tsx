// @ts-expect-error: untyped object import
import samples from "../../../../resources/ble-dl-sample-types.yml";
import type {SampleTypes} from "../../../../types/ble-sample-types-download-schema";
import {Dialog} from "radix-ui";
import {SearchCriterias} from "../../../../types/search-criterias.d.tsx";
import {useContext, useState} from "react";
import {FilterContext} from "../common/contexts.tsx";
import DlSampleContent from "./dl_sample_content.tsx";
import SampleHeader from "../common/samples/sample_header.tsx";
import {getRelevantSignals} from "../../../../utils.tsx";

export type DlSample = SampleTypes["sample-types"][number]["sample-type"];
export type DlSampleId = DlSample["id"];
export type DlSampleFields = DlSample["fields"];

const dlSamples = samples as SampleTypes;

function DownloadSampleList() {
    const fContext = useContext(FilterContext);
    const [selected_sample, set_selected_sample] = useState(filterDownloadSampleList(fContext.filters)[0]["sample-type"]);

    function filterDownloadSampleList(filters: SearchCriterias) {
        // Filter on "Gadget" select according the suitable-for in sample
        let filteredSamples = [...dlSamples["sample-types"]]
        if (filters.selectedGadget != undefined) {
            filteredSamples = filteredSamples.filter(s =>
                s["sample-type"]["suitable-for"]?.includes(filters.selectedGadget!));
        }
        // Filter on "Signals" select according the fields in sample
        if (filters.selectedSignals.length > 0) {
            const selSign = new Set(filters.selectedSignals);
            filteredSamples = filteredSamples.filter(s => {
                const sampleSignals = new Set(s["sample-type"].fields?.map(f => f.field.name));
                return selSign.isSubsetOf(sampleSignals);
            });
        }
        return filteredSamples;
    }

    return <Dialog.Root>
        <div className="dialog_trigger_list">
            {filterDownloadSampleList(fContext.filters).map((s) => {
                const relevantSignals = getRelevantSignals(s["sample-type"].fields)
                return <Dialog.Trigger asChild>
                    <SampleHeader
                        name={s["sample-type"].description}
                        signals={relevantSignals}
                        sampleType={s["sample-type"].id["sample-type"].at(0)!}
                        gadgets={s["sample-type"]["suitable-for"]}
                        numberOfSignals={relevantSignals.length}
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
                <DlSampleContent content={selected_sample}/>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}

export default DownloadSampleList
