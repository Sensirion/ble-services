import "./sample_content.css";
import {ReactNode} from "react";
import {MathJax} from "better-react-mathjax";
import {AdSample, AdSampleFields} from "../../ad_sample_page/ad_sample_list.tsx";
import {DlSample, DlSampleFields} from "../../dl_sample_page/dl_sample_list.tsx";
import {getMergedGadgetsAndSensorsFromSample} from "../../../../../utils.tsx";

interface SampleProps {
    content: AdSample | DlSample;
    children?: ReactNode;
}

const SampleContent = ({content, children}: SampleProps) => {
    return (
        <div className="sample_content">
            <div>
                <b>Used
                    by:</b> {content["suitable-for"] ? getMergedGadgetsAndSensorsFromSample(content).join(", ") : '?'}
            </div>
            {content.notes ?
                <div className="sample_content__note">{content.notes}</div>
                : ''
            }
            <div>
                <h3>Fields</h3>
                <FieldsTable fields={content.fields}/>
            </div>
            {children}
        </div>
    );
}

const FieldsTable = ({fields}: { fields: AdSampleFields | DlSampleFields }) => {
    if (!fields) {
        return <div>No fields!</div>
    }

    const calculateSize = (currentOffset: number, previousOffset: number | null) => {
        return previousOffset !== null ? currentOffset - previousOffset : currentOffset;
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Offset</th>
                <th>Size</th>
                <th>Conversion</th>
            </tr>
            </thead>
            <tbody>
            {fields.map((f, index) => {
                const previousOffset = index > 0 ? fields[index - 1].field["byte-offset"] : null;
                const size = calculateSize(f.field["byte-offset"], previousOffset);
                return (
                    <tr key={f.field.name}>
                        <td>{f.field.name}</td>
                        <td>{f.field.description}<br/>{f.field.notes}</td>
                        <td>{f.field["data-type"]}</td>
                        <td>{f.field["byte-offset"]}B</td>
                        <td>{size}B</td>
                        <td>
                            <MathJax title={f.field.conversion?.formula}>`{f.field.conversion?.formula}`</MathJax>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default SampleContent;
