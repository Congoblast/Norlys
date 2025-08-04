import { useContext, type ReactNode } from "react";
import { AccordionContext } from "../AccordionContext";
import styled, { css } from "styled-components";
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa";

interface Props {
  /**
   * The content to be rendered inside the header of the accordions
   */
  children: ReactNode;
}

/**
 * The accordion header is responsible for rendering the content in the accordion header, and the functionality of being clickable
 * to be able to toggle the content.
 */
const AccordionHeadline: React.FC<Props> = (props) => {
  const { children } = props;

  const context = useContext(AccordionContext);

  const { isExpanded, setIsExpanded } = context;

  const onToggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Root onClick={onToggleAccordion}>
      <ChevronWrapper>
        <ChevronIcon $isExpanded={isExpanded} />
      </ChevronWrapper>
      <HeaderContent>{children}</HeaderContent>
    </Root>
  );
};

const Root = styled.div`
  display: flex;

  border: 1px solid black;
`;

const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 5px;
  padding-right: 5px;
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
  gap: 10px;
`;

export default AccordionHeadline;
