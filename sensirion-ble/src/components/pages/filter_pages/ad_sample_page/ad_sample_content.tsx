import React from "react";
import {AdSample, AdSampleFields, AdSampleId} from "./ad_sample_list.tsx";
import SampleContent from "../common/samples/sample_content.tsx";
import {toHexDisplay} from "../../../../utils.tsx";

interface AdSampleProps {
    content: AdSample;
}

const AdSampleContent = ({content}: AdSampleProps) => {
    return(
        <>
            <SampleContent content={content}>
                <div>
                    <h3>Sample Byte Layout</h3>
                    <ByteLayoutTable id={content.id} fields={content.fields} />
                </div>
            </SampleContent>
        </>
    );
}

const ByteLayoutTable = ({id, fields}: {id: AdSampleId, fields: AdSampleFields}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sample Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <table>
                            <thead>
                                <tr>
                                    <th>Byte 0 (Ad type)</th>
                                    <th>Byte 1 (Sample type)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{toHexDisplay(Number(id["ad-type"]))}</td>
                                    <td>{toHexDisplay(Number(id["sample-type"]))}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        {fields ?
                            <table>
                                <thead>
                                    <tr>
                                        {fields.map((_f, index) => (
                                            <React.Fragment key={index}>
                                                <th>Byte {2 * index + 2}</th>
                                                <th>Byte {2 * index + 3}</th>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {fields.map((f, index) => (
                                            <React.Fragment key={index}>
                                                <td>{f.field.name}-LSB</td>
                                                <td>{f.field.name}-MSB</td>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                            : 'No data'
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default AdSampleContent;
