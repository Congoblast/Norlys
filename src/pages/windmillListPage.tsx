import { WindmillProvider } from "../providers/WindmillProvider";
import WindMillList from "../components/windmillList/WindMillList";

export const WindMillPage = () => {
  return (
    <WindmillProvider>
      <div>Windmill List page:</div>
      <WindMillList></WindMillList>
    </WindmillProvider>
  );
};
