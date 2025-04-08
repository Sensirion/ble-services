// @ts-expect-error: untyped object import
import samples from "../../../../../resources/ble-dl-sample-types.yml";
import type {SampleTypes} from "../../../../../types/ble-sample-types-download-schema";
import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../../../vectors/chevronIcon.tsx";
import {SearchCriterias} from "../../../../../types/search-criterias.d.tsx";
import {useContext} from "react";
import {FilterContext} from "../../contexts.tsx";
import DlSampleContent from "./dl_sample_content.tsx";
import SampleHeader from "../sample_header.tsx";
import {getRelevantSignals} from "../../../../../utils.tsx";

export type DlSample = SampleTypes["sample-types"][number]["sample-type"];
export type DlSampleId = DlSample["id"];
export type DlSampleFields = DlSample["fields"];

const dlSamples = samples as SampleTypes;

function DownloadSampleList() {
    const fContext = useContext(FilterContext);

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

    return <Accordion.Root type="single">
        {filterDownloadSampleList(fContext.filters).map((s, i) => {
            return (
                <Accordion.Item value={"dl-sample-" + i} className="accordion" key={"dl-sample-" + i}>
                    <Accordion.Header className="accordion__header">
                        <Accordion.Trigger className="accordion__header__trigger">
                            <SampleHeader
                                name={s["sample-type"].description}
                                signals={getRelevantSignals(s["sample-type"].fields)}
                                sampleType={s["sample-type"].id["sample-type"].at(0)!}
                                gadgets={s["sample-type"]["suitable-for"]}
                                numberOfSignals={getRelevantSignals(s["sample-type"].fields).length}
                            />
                            <ChevronIcon
                                className="accordion__header__chevron"
                                aria-hidden
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion__content">
                        <DlSampleContent content={s["sample-type"]} />
                    </Accordion.Content>
                </Accordion.Item>
            );
        })}
    </Accordion.Root>
}

export default DownloadSampleList
