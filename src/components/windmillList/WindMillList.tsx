import { useWindmillContext } from "../../providers/WindmillProvider";
import WindMillListItem from "./WindMillListItem/WindMillListItem";

const WindMillList: React.FC = () => {
  const { windmills } = useWindmillContext();

  return (
    <div>
      <div>
        <div> text</div>
        <div> text</div>
      </div>
      {windmills.map((windmill, index) => (
        <WindMillListItem key={index} windmill={windmill} />
      ))}
    </div>
  );
};

export default WindMillList;
