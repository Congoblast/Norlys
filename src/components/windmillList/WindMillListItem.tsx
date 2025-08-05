import styled from "styled-components";
import type { Windmill } from "../../types/windmill/WindmillTypes";
import { Accordion, AccordionContent, AccordionHeader } from "../accordion";
import { WindmillItemManagement } from "./windmillItemManagement/WindmillItemManagement";

interface Props {
  /**
   * Windmill object containing details about the windmill.
   */
  windmill: Windmill;
  /**
   * Columns to be displayed in the header of the windmill list item.
   */
  dataColumns: Array<{ key: keyof Windmill; label: string }>;
}

/**
 * WindMillListItem is a component whcih display a single windmill item in a list.
 * It uses an Accordion to open and show additional details when clicked.
 */
export const WindmillListItem: React.FC<Props> = (props) => {
  const { windmill, dataColumns } = props;
  const { id } = windmill;

  return (
    <Accordion key={id}>
      <AccordionHeader>
        <HeaderRow>
          {dataColumns.map((column) => (
            <Cell key={column.key}>{windmill[column.key]}</Cell>
          ))}
        </HeaderRow>
      </AccordionHeader>
      <AccordionContent>
        <WindmillItemManagement windmill={windmill} />
      </AccordionContent>
    </Accordion>
  );
};

const HeaderRow = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

const Cell = styled.div`
  flex: 1;

  padding: 12px;

  text-align: left;
`;
