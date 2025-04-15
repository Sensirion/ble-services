import "./sample_header.css";
import {ReactNode} from "react";
import {
    faThermometerHalf,
    faTint,
    faSmog,
    faCloud,
    faWind,
    faVial,
    faExclamationTriangle,
    faFan
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {SimpleCard} from "../../../../common/card.tsx";
import {Separator} from "../../../../common/separator.tsx";

interface SampleHeaderProps {
    name: string,
    hexId: string,
    signals?: string[],
    sampleType: string,
    gadgetsAndSensors?: string[],
    sampleByteSize: number,
    children?: ReactNode,
    onClick: () => void,
    className: string,
}

const SampleHeader = ({
                          signals,
                          sampleType,
                          hexId,
                          gadgetsAndSensors,
                          sampleByteSize,
                          children,
                          onClick,
                          className
                      }: SampleHeaderProps) => {
    return (
        <div className={`sample_header ${className}`} onClick={onClick}>
            <div className="sample_header__left">
                <div className="sample_header__left__title">{sampleType}</div>
                <div className="sample_header__left__hex_id">{hexId}</div>
            </div>
            <div className="sample_header__right">
                <div className="sample_header__card">
                    <SimpleCard title="Sample Size" className="card__sample_size">
                        {sampleByteSize} byte{sampleByteSize !== 1 ? 's' : ''}
                    </SimpleCard>
                </div>
                <Separator orientation="vertical" />
                <div className="sample_header__card">
                    <SimpleCard title={`${signals?.length} Signal${signals?.length !== 1 ? 's' : ''}`} className="card__signals">
                        {signals?.length ?
                            <div className="card__signals__icons"><SignalIcons signals={signals}/></div> : ''}
                    </SimpleCard>
                </div>
                <Separator orientation="vertical" />
                <div className="sample_header__card">
                    <SimpleCard title="Used by" className="card__gadgets">
                        {gadgetsAndSensors?.length ? gadgetsAndSensors.map(entry => (
                            <div key={entry}>
                                {entry}
                            </div>
                        )) : '?'}
                    </SimpleCard>
                </div>
                {children}
            </div>
        </div>
    );
}

const signalIconMap: { [key: string]: IconDefinition } = {
    "Temperature": faThermometerHalf,
    "Humidity": faTint,
    "VOC": faSmog,
    "CO2": faCloud,
    "PM2.5": faWind,
    "HCHO": faVial,
    "NOx": faExclamationTriangle,
    "PM1.0": faWind,
    "PM4.0": faWind,
    "PM10": faWind,
    "AV": faFan,
};

const SignalIcons = ({signals}: { signals: string[] }) => {
    return (
        <>
            {signals.map((signal, index) => (
                <div key={index} className="sample_header__signal_icon" title={signal}>
                    {signalIconMap[signal] ?
                        <>
                            <FontAwesomeIcon icon={signalIconMap[signal]} fixedWidth/>
                            {signal}
                        </>
                        : ''}
                </div>
            ))}
        </>
    );
}

export default SampleHeader;
