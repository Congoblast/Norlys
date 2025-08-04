import { useCallback, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import Pagination from "../pagination/Pagination";
import ContentTable from "../contentTable/ContentTable";
import WindMillListItem from "./WindMillListItem";
import SearchBar from "../search/SearchBar";
import { sortListByKey } from "../../utils/SortListByKey";
import { usePaginationContext } from "../../providers/PaginationProvider";
import { WINDMILL_COLUMNS } from "./WindmillColumns";

const WindMillList: React.FC = () => {
  const { windmills } = useWindmillContext();
  const { indexOfFirstItem, indexOfLastItem } = usePaginationContext();
  const [filteredWindmills, setFilteredWindmills] = useState(windmills);
  const shownItems = sortListByKey(filteredWindmills).slice(indexOfFirstItem, indexOfLastItem);

  const handleFilteredResults = useCallback((results: Windmill[]) => {
    setFilteredWindmills(results);
  }, []);

  return (
    <div>
      <SearchBar items={windmills} searchField="model" onFilteredResults={handleFilteredResults} />

      <ContentTable
        columns={WINDMILL_COLUMNS}
        items={shownItems}
        renderRow={(windmill) => <WindMillListItem windmill={windmill} columns={WINDMILL_COLUMNS} />}
      />

      <Pagination items={filteredWindmills as []} />
    </div>
  );
};

export default WindMillList;
