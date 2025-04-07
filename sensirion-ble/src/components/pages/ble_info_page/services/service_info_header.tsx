import "./service_info_header.css";

interface ServiceInfoHeaderProps {
    name: string,
    isLegacy: boolean,
    numberOfCharacteristics: number,
    uuid: string
}

const ServiceInfoHeader = ({name, isLegacy, numberOfCharacteristics, uuid}: ServiceInfoHeaderProps) => {
    return (
      <div className="service_info_header">
          <div>{name}</div>
          <div className="service_info_header__details">
              <div>{uuid}</div>
              <div className="service_info_header__details__characteristics">{numberOfCharacteristics} Characteristic{numberOfCharacteristics > 1 ? 's' : ''}</div>
              <div className={`type ${isLegacy ? 'legacy' : 'public'}`}>{isLegacy ? 'Legacy' : 'Public'}</div>
          </div>
      </div>
    );
}

export default ServiceInfoHeader;
