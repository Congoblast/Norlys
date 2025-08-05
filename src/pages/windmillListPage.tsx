import { WindmillList } from "../components/windmillList";
import { WindmillProvider } from "../providers/WindmillProvider";

/**
 * Windmillpage to display list of windmills.
 */
export const WindMillPage = () => {
  return (
    <WindmillProvider>
      <WindmillList />
    </WindmillProvider>
  );
};
