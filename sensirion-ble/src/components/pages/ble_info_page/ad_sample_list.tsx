// @ts-expect-error: untyped object import
import samples from "../../../resources/ble-ad-sample-types.yml";
import type {SampleTypes} from "../../../types/ble-sample-types-adv-schema";
import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../vectors/chevronIcon.tsx";
import "./accordion.css"

const advSamples = samples as SampleTypes;

function AdvertisementSampleList() {
    return <Accordion.Root type="single">
        {advSamples["sample-types"].map((s, i) => {
            return (
                <Accordion.Item value={"ad-sample-" + i} className="accordion" key={"ad-sample-" + i}>
                    <Accordion.Header className="accordion__header">
                        <Accordion.Trigger className="accordion__header__trigger">
                            <div>{s['sample-type'].description}</div>
                            <ChevronIcon
                                className="accordion__header__chevron"
                                aria-hidden
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion__content">
                        {JSON.stringify(s['sample-type'])}
                    </Accordion.Content>
                </Accordion.Item>
            );
        })}
    </Accordion.Root>
}

export default AdvertisementSampleList
