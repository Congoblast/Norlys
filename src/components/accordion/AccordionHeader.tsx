import { useContext, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";
import { AccordionContext } from "./Accordion.context";

interface Props extends PropsWithChildren {}

/**
 * The accordion header is responsible for rendering the content in the accordion header, and the functionality of being clickable
 * to be able to toggle the content.
 */
export const AccordionHeader: React.FC<Props> = (props) => {
  const { children } = props;

  const context = useContext(AccordionContext);

  const { isExpanded, setIsExpanded } = context;

  const onToggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Root onClick={onToggleAccordion} $isExpanded={isExpanded}>
      <HeaderContent>{children}</HeaderContent>
      <ChevronWrapper>
        <ChevronIcon $isExpanded={isExpanded} />
      </ChevronWrapper>
    </Root>
  );
};

const Root = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: white;

  &:hover {
    ${({ $isExpanded }) =>
      !$isExpanded &&
      css`
        background-color: #f5f5f5;
      `}
  }

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      background-color: #cccccc;
    `}
`;

const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  right: 12px;
`;

const ChevronIcon = styled(ChevronDownIcon)<{ $isExpanded: boolean }>`
  transition: transform 0.3s ease-in-out;

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      transform: rotate(-180deg);
    `}
`;

const HeaderContent = styled.div`
  display: flex;

  cursor: pointer;

  width: 100%;
`;
