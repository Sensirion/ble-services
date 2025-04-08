import "./sample_header.css";
import {ReactNode} from "react";
import { faThermometerHalf, faTint, faSmog, faCloud, faWind, faVial, faExclamationTriangle, faFan } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface SampleHeaderProps {
    name: string,
    signals?: string[],
    sampleType: string,
    numberOfSignals: number,
    gadgets?: string[],
    children?: ReactNode,
}

const SampleHeader = ({name, signals, sampleType, numberOfSignals, gadgets, children}: SampleHeaderProps) => {
    return (
      <div className="sample_header">
          <div>{name}</div>
          <div className="sample_header__children">
              {signals?.length ? <div className="sample_header__signal_icons"><SignalIcons signals={signals}/></div> : ''}
              {gadgets ? <div className="sample_header__used_by">{gadgets.join(", ")}</div> : ""}
              <div className="sample_header__signals">{numberOfSignals} Signal{numberOfSignals !== 1 ? 's' : ''}</div>
              {children}
              <div className="sample_header__sample_type">Sample type {sampleType}</div>
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

const SignalIcons = ({signals}: {signals: string[]}) => {
    console.log(signals);
    return (
        <>
            {signals.map((signal, index) => (
                <div key={index} className="sample_header__signal_icon" title={signal}>
                    {signalIconMap[signal] ? <FontAwesomeIcon icon={signalIconMap[signal]} /> : ''}
                </div>
            ))}
        </>
    );
}

export default SampleHeader;
