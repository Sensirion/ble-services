import "./service_info_header.css";

interface ServiceInfoHeaderProps {
    name: string,
    isCustom: boolean,
    numberOfCharacteristics: number,
    uuid: string,
    onClick: () => void,
    className: string
}

const ServiceInfoHeader = ({
                               name,
                               isCustom,
                               numberOfCharacteristics,
                               uuid,
                               onClick,
                               className
                           }: ServiceInfoHeaderProps) => {
    return (
        <div className={`service_info_header ${className}`} onClick={onClick}>
            <div>{name}</div>
            <div className="service_info_header__details">
                <div className="service_info_header__details__uuid">{uuid}</div>
                <div
                    className="service_info_header__details__characteristics">{numberOfCharacteristics} Characteristic{numberOfCharacteristics > 1 ? 's' : ''}</div>
                <div className={`type ${isCustom ? 'custom' : 'public'}`}>{isCustom ? 'Custom' : 'Public'}</div>
            </div>
        </div>
    );
}

export default ServiceInfoHeader;
