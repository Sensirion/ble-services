import {ReactNode} from "react";
import "./card.css";
import { Separator } from "radix-ui";

interface SimpleCardProps {
    title?: string,
    className?: string,
    children: ReactNode
}

export const SimpleCard = ({title, className, children}: SimpleCardProps) => {
    return (
        <div className={`card ${className}`}>
            <div className="card__content">
                {title ?
                    <>
                        <h2 className="card__title">{title}</h2>
                        <Separator.Root
                            className="card__separator"
                            decorative
                            orientation="horizontal"
                        />
                    </> : ''}
                <div className="card__text">{children}</div>
            </div>
        </div>
    );
}
