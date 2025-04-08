// @ts-expect-error: untyped object import
import samples from "../../../../../resources/ble-ad-sample-types.yml";
import type {SampleTypes} from "../../../../../types/ble-sample-types-adv-schema";
import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../../../vectors/chevronIcon.tsx";
import "../../accordion.css"
import {SearchCriterias} from "../../../../../types/search-criterias.d.tsx";
import {useContext} from "react";
import {FilterContext} from "../../contexts.tsx";
import AdSampleContent from "./ad_sample_content.tsx";
import SampleHeader from "../sample_header.tsx";
import {getRelevantSignals} from "../../../../../utils.tsx";

export type AdSample = SampleTypes["sample-types"][number]["sample-type"];
export type AdSampleId = AdSample["id"];
export type AdSampleFields = AdSample["fields"];

const advSamples = samples as SampleTypes;

function AdvertisementSampleList() {
    const fContext = useContext(FilterContext);

    function filterAdvertisementSampleList(filters: SearchCriterias) {
        let filteredSamples = [...advSamples["sample-types"]]
        // Filter on "Gadget" select according the suitable-for in sample
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
        {filterAdvertisementSampleList(fContext.filters).map((s, i) => {
            return (
                <Accordion.Item value={"ad-sample-" + i} className="accordion" key={"ad-sample-" + i}>
                    <Accordion.Header className="accordion__header">
                        <Accordion.Trigger className="accordion__header__trigger">
                            <SampleHeader
                                name={s["sample-type"].description}
                                signals={getRelevantSignals(s["sample-type"].fields)}
                                sampleType={s["sample-type"].id["sample-type"]}
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
                        <AdSampleContent content={s["sample-type"]} />
                    </Accordion.Content>
                </Accordion.Item>
            );
        })}
    </Accordion.Root>
}

export default AdvertisementSampleList
