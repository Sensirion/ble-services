import "./service_info_header.css";
import {SimpleCard} from "../../../common/card.tsx";
import {Separator} from "../../../common/separator.tsx";

interface ServiceInfoHeaderProps {
    name: string,
    characteristics: string[],
    gadgets?: string[],
    uuid: string,
    onClick: () => void,
    className: string
}

const ServiceInfoHeader = ({
                               name,
                               characteristics,
                               gadgets,
                               uuid,
                               onClick,
                               className
                           }: ServiceInfoHeaderProps) => {
    return (
        <div className={`service_info_header ${className}`} onClick={onClick}>
            <div className="service_info_header__left">
                <div className="service_info_header__left__title">{name}</div>
                <div className="service_info_header__left__uuid">{uuid}</div>
            </div>
            <div className="service_info_header__right">
                <div className="service_info_header__card">
                    <SimpleCard
                        title={`${characteristics.length} Characteristic${characteristics.length !== 1 ? 's' : ''}`}
                        className="card__characteristics">
                        {characteristics.map((characteristic, index) => (
                            <div key={index}>
                                {characteristic}
                            </div>
                        ))}
                    </SimpleCard>
                </div>
                <Separator orientation="vertical" />
                <div className="service_info_header__card">
                    <SimpleCard title="Used by" className="card__used_by">
                        {gadgets ? gadgets.map((gadget, index) => (
                            <div key={index}>
                                {gadget}
                            </div>
                        )) : '?'}
                    </SimpleCard>
                </div>
            </div>
        </div>
    );
}

export default ServiceInfoHeader;
