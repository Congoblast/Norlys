import { WindmillProvider } from "../providers/WindmillProvider";
import WindMillList from "../components/windmillList/WindMillList";

/**
 * Windmillpage to display list of windmills.
 */
export const WindMillPage = () => {
  return (
    <WindmillProvider>
      <WindMillList />
    </WindmillProvider>
  );
};
