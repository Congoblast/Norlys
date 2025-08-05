import styled from "styled-components";
import type { Windmill } from "../../services/windmill-types";
import WindmillItemManagement from "./windmillItemManagement/WindmillItemManagement";
import { Accordion, AccordionContent, AccordionHeader } from "../accordion";

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
const WindMillListItem: React.FC<Props> = (props) => {
  const { windmill, dataColumns } = props;

  const { brand, id, model, installedCapacityMw } = windmill;

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
        <WindmillItemManagement model={model} brand={brand} installedCapacityMW={installedCapacityMw} id={id} />
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

export default WindMillListItem;
