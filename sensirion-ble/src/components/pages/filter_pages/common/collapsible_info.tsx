import {Accordion} from "radix-ui";
import {ReactNode} from "react";
import {ChevronIcon} from "../../../vectors/chevronIcon.tsx";
import "./collapsible_info.css";

const CollapsibleInfo = ({children}: {children: ReactNode}) => {
    return (
      <Accordion.Root type="single" className="collapsible_info" collapsible>
          <Accordion.Item value="item-1" className="collapsible_info__item">
              <Accordion.Header className="collapsible_info__item__header">
                  <Accordion.Trigger className="collapsible_info__item__header__trigger">
                      <ChevronIcon className="collapsible_info__item__header__chevron" aria-hidden />
                      More Info...
                  </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="collapsible_info__item__content">{children}</Accordion.Content>
          </Accordion.Item>
      </Accordion.Root>
    );
}

export default CollapsibleInfo;
