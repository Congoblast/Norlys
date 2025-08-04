import { useState, type ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";

interface Props {
  children: ReactNode;

  isDefaultExpanded?: boolean;
}

const Accordion: React.FC<Props> = (props) => {
  const { children, isDefaultExpanded } = props;

  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded || false);

  return (
    <div>
      <AccordionContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
