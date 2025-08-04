import styled from "styled-components";
import type { Windmill } from "../../services/windmill-types";
import Accordion from "../accordion/Accordion";
import AccordionHeader from "../accordion/accordionHeader/AccordionHeader";
import AccordionContent from "../accordion/accordionContent/AccordionContent";
import { DeleteWindMill } from "../../services/TechnicalTestService";
import WindmillItemMangement from "./windmillItemManagement/WindMillItemManagement";

interface Props {
  windmill: Windmill;
  columns: Array<{ key: keyof Windmill; label: string }>;
  onListChange: (id: number) => void;
}

const WindMillListItem: React.FC<Props> = (props) => {
  const { windmill, columns, onListChange } = props;
  const { brand, id, model, installedCapacityMw } = windmill;

  const HandleDeleteWindMill = async (id: number) => {
    try {
      await DeleteWindMill(id);
      onListChange(id);
      console.log("Windmill deleted successfully");
    } catch (error) {
      console.error("Error deleting windmill:", error);
    }
  };

  return (
    <Accordion key={id} isDefaultExpanded={false}>
      <AccordionHeader>
        <HeaderRow>
          {columns.map((column) => (
            <Cell key={column.key}>{windmill[column.key]}</Cell>
          ))}
        </HeaderRow>
      </AccordionHeader>
      <AccordionContent>
        <WindmillItemMangement
          model={model}
          brand={brand}
          installedCapacityMW={installedCapacityMw}
          id={id}
          onListChange={onListChange}
        />

        <div>
          {/* <p>Details for {model}</p> */}

          {/* <Button onClick={() => HandleDeleteWindMill(id)}> Delete btn</Button> */}
        </div>
      </AccordionContent>
    </Accordion>
  );
};
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

const Button = styled.button`
  padding: 8px 12px;
  background-color: #f0f0f0;
`;

export default WindMillListItem;
