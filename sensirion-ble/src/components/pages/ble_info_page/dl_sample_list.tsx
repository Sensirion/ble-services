// @ts-expect-error: untyped object import
import samples from "../../../resources/ble-dl-sample-types.yml";
import type {SampleTypes} from "../../../types/ble-sample-types-download-schema";
import {Accordion} from "radix-ui";
import {ChevronIcon} from "../../vectors/chevronIcon.tsx";

const dlSamples = samples as SampleTypes;


function DownloadSampleList() {
    return <Accordion.Root type="single">
        {dlSamples["sample-types"].map((s, i) => {
            return (
                <Accordion.Item value={"service-" + i} className="accordion">
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

export default DownloadSampleList
