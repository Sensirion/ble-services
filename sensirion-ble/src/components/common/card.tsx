import {PropsWithChildren} from "react";
import "./card.css";

interface SimpleCardProps {
    title?: string,
    className?: string,
}

export const SimpleCard = ({title, className, children}: PropsWithChildren<SimpleCardProps>) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__content">
                {title ?
                    <>
                        <h2 className="card__title">{title}</h2>
                    </> : ''}
                <div className="card__text">{children}</div>
            </div>
        </div>
    );
}
