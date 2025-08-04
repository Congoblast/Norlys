import { WindmillProvider } from "../providers/WindmillProvider";
import WindMillList from "../components/windmillList/WindMillList";
import { PaginationProvider } from "../providers/PaginationProvider";

const ITEMS_PER_PAGE = 10;

export const WindMillPage = () => {
  return (
    <WindmillProvider>
      <PaginationProvider itemsPerPage={ITEMS_PER_PAGE}>
        <WindMillList />
      </PaginationProvider>
    </WindmillProvider>
  );
};
