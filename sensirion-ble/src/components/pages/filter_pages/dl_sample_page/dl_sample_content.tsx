import React from "react";
import {DlSample, DlSampleFields, DlSampleId} from "./dl_sample_list.tsx";
import SampleContent from "../common/samples/sample_content.tsx";
import {toHexDisplay} from "../../../../utils.tsx";

interface DlSampleProps {
    content: DlSample;
}

const DlSampleContent = ({content}: DlSampleProps) => {
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

const ByteLayoutTable = ({id, fields}: {id: DlSampleId, fields: DlSampleFields}) => {
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
                                    <th>Byte 0</th>
                                    <th>Byte 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{toHexDisplay(Number(id["sample-type"].at(0)))}</td>
                                    <td>{toHexDisplay(Number(id["sample-type"].at(1)))}</td>
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

export default DlSampleContent;
