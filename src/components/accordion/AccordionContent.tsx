import styled, { css } from "styled-components";
import type { PropsWithChildren } from "react";
import { useAccordion } from "./Accordion.context";

interface Props extends PropsWithChildren {}

/**
 * The accordion content to be shown inside the accordion
 */
export const AccordionContent: React.FC<Props> = (props) => {
  const { children } = props;

  const { isExpanded } = useAccordion();

  return <AccordionItem $isExpanded={isExpanded}>{children}</AccordionItem>;
};

const AccordionItem = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  justify-content: center;

  border: 1px solid #e2e2e2;
  background-color: #e4e2e2;
  transition: 0.3s ease;

  overflow: hidden;

  max-height: 0;

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      max-height: 100vh;
      overflow: auto;
    `}
`;
