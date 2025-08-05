import { useState, type PropsWithChildren } from "react";
import { AccordionContext } from "./Accordion.context";

interface Props extends PropsWithChildren {
  isDefaultExpanded?: boolean;
}

export const Accordion: React.FC<Props> = (props) => {
  const { children, isDefaultExpanded } = props;

  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded || false);

  return (
    <div>
      <AccordionContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</AccordionContext.Provider>
    </div>
  );
};
