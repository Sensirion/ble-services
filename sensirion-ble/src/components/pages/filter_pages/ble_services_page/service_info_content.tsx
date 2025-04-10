import "../common/accordion.css"
import "./service_info_content.css"

import type {BLEServiceSchemaDefinition} from "../../../../types/ble-service-schema";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import Markdown from "markdown-to-jsx";

type BLEService = BLEServiceSchemaDefinition["ble-services"][number]["service"];
type BLECharacteristics = BLEService["supported-characteristics"];
type BLECharacteristicsProperties = BLECharacteristics[number]["characteristic"]["access-properties"];
type BLECharacteristicsImplementedBy = BLECharacteristics[number]["characteristic"]["implemented-by"];

interface ServiceInfoProps {
    content: BLEService;
}

const ServiceInfoContent = ({content}: ServiceInfoProps) => {
    return(
        <div className="service_info_content">
            <div>
                <b>Service UUID:</b> {content.uuid} <ReferenceLink link={content["ble-sig-reference"]} />
            </div>
            {content["application-note"] ?
                <div>
                    <h3>Application Note</h3>
                    <Markdown children={content["application-note"]} />
                </div>
                : ''
            }
            <div>
                <h3>Characteristics</h3>
                <CharacteristicsTable characteristics={content["supported-characteristics"]} />
            </div>
        </div>
    );
}

const ReferenceLink = ({link}: {link?: string}) => {
    return link ? <a href={link} target="_blank">(BLE service reference)</a> : '';
}

const CharacteristicsTable = ({characteristics}: {characteristics: BLECharacteristics}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Characteristic</th>
                    <th>UUID</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Access</th>
                    <th>Gadget Support</th>
                </tr>
            </thead>
            <tbody>
                {characteristics.map((c) => (
                    <tr key={c.characteristic.uuid}>
                        <td>{c.characteristic.name}</td>
                        <td>{c.characteristic.uuid}</td>
                        <td>{c.characteristic["data-type"]}</td>
                        <td>{c.characteristic.description}</td>
                        <td><PropertyIcons properties={c.characteristic["access-properties"]} /></td>
                        <td><SupportedByCell supportedBy={c.characteristic["implemented-by"]} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const PropertyIcons = ({properties}: {properties: BLECharacteristicsProperties}) => {
    return (
        <div className="property-icons">
            <FontAwesomeIcon icon={faEye} title="Read" className={properties.includes("read") ? '' : 'inactive'} />
            <FontAwesomeIcon icon={faPencilAlt} title="Write" className={properties.includes("write") ? '' : 'inactive'} />
            <FontAwesomeIcon icon={faBell} title="Notify" className={properties.includes("notify") ? '' : 'inactive'} />
        </div>
    );
}

const SupportedByCell = ({supportedBy}: {supportedBy: BLECharacteristicsImplementedBy}) => {
    if (!supportedBy) {
        return null;
    }

    return (
        <div>
            {supportedBy.join(", ")}
        </div>
    );
}

export default ServiceInfoContent;
