import { type PropsWithChildren, useState } from "react";
import { AccordionProvider } from "./Accordion.context";

interface Props extends PropsWithChildren {}

/**
 * Accordion that should use accordion header and accordion content, which takes children and render them
 * inside the accordion
 */
export const Accordion: React.FC<Props> = (props) => {
  const { children } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AccordionProvider isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
      {children}
    </AccordionProvider>
  );
};
