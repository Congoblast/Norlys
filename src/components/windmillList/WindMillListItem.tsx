import styled from "styled-components";
import type { Windmill } from "../../services/windmill-types";
import Accordion from "../accordion/Accordion";
import AccordionHeader from "../accordion/accordionHeader/AccordionHeader";
import AccordionContent from "../accordion/accordionContent/AccordionContent";

interface Props {
  windmill: Windmill;
  columns: Array<{ key: keyof Windmill; label: string }>;
}

function WindMillListItem({ windmill, columns }: Props) {
  return (
    <Accordion key={windmill.id} isDefaultExpanded={false}>
      <AccordionHeader>
        <HeaderRow>
          {columns.map((column) => (
            <Cell key={column.key}>{windmill[column.key]}</Cell>
          ))}
        </HeaderRow>
      </AccordionHeader>
      <AccordionContent>
        <div>
          <p>Details for {windmill.model}</p>
        </div>
      </AccordionContent>
    </Accordion>
  );
}

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Cell = styled.div`
  flex: 1;
  padding: 12px;
  text-align: left;
`;

export default WindMillListItem;
