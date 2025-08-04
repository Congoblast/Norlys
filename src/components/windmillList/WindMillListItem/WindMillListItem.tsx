import type { Windmill } from "../../../services/windmill-types";
import Accordion from "../../accordion/Accordion";
import AccordionContent from "../../accordion/accordionContent/AccordionContent";
import AccordionHeadline from "../../accordion/accordionHeadline/AccordionHeadLine";

interface Props {
  windmill: Windmill;
}

const WindMillListItem: React.FC<Props> = (props) => {
  const { windmill } = props;
  const { brand, model, id, installedCapacityMW } = windmill;

  console.log(windmill, "mill");
  return (
    <Accordion isDefaultExpanded={false}>
      <AccordionHeadline>
        <div>{id}</div>
        <div>{brand}</div>
        <div>{model}</div>
        <div> {installedCapacityMW}</div>
      </AccordionHeadline>
      <AccordionContent>
        <div>
          <p>Model: {model}</p>
          <p>Brand: {brand}</p>
        </div>
      </AccordionContent>
    </Accordion>
  );
};

export default WindMillListItem;
