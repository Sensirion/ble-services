import { Separator as RadixSeparator } from "radix-ui";
import "./separator.css";

interface SeparatorProps {
    orientation: "horizontal" | "vertical";
}

export const Separator = ({orientation}: SeparatorProps) => {
    return (
        <RadixSeparator.Root
                    className="radix_separator"
                    decorative
                    orientation={orientation}
        />
    );
}
