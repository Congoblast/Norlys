import { useContext, type ReactNode } from "react";
import { AccordionContext } from "../AccordionContext";
import styled, { css } from "styled-components";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";

interface Props {
  /**
   * The content to be rendered inside the header of the accordions
   */
  children?: ReactNode;
}

/**
 * The accordion header is responsible for rendering the content in the accordion header, and the functionality of being clickable
 * to be able to toggle the content.
 */
const AccordionHeader: React.FC<Props> = (props) => {
  const { children } = props;

  const context = useContext(AccordionContext);

  const { isExpanded, setIsExpanded } = context;

  const onToggleAccordion = () => {
    console.log("running toggle");
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
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
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
  cursor: pointer;
  display: flex;
  width: 100%;
`;

export default AccordionHeader;
