import { useCallback, useMemo, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import Pagination from "../pagination/pagination";
import ContentTable from "../contentTable/ContentTable";
import WindMillListItem from "./WindMillListItem";
import SearchBar from "../search/SearchBar";
import { sortListByKey } from "../../utils/SortListByKey";

export const columns: Array<{ key: keyof Windmill; label: string }> = [
  { key: "id", label: "ID" },
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
  { key: "installedCapacityMw", label: "Installed Capacity (MW)" },
];

const ITEMS_PER_PAGE = 10;

const WindMillList: React.FC = () => {
  const { windmills, updateWindmills, loading } = useWindmillContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredWindmills, setFilteredWindmills] = useState(windmills);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilteredResults = useCallback((results: Windmill[]) => {
    setFilteredWindmills(results);
    setCurrentPage(1);
  }, []);

  const handleListChange = useCallback(
    async (id: number) => {
      if (loading) return; // Prevent multiple calls while loading

      try {
        const updatedWindmills = windmills.filter((windmill) => windmill.id !== id);
        // Update filtered list first for immediate UI feedback
        setFilteredWindmills((prev) => prev.filter((windmill) => windmill.id !== id));
        // Then update the context
        await updateWindmills(updatedWindmills);
      } catch (error) {
        console.error("Error updating list:", error);
        // Revert filtered list if update fails
        setFilteredWindmills(windmills);
      }
    },
    [windmills, updateWindmills, loading],
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = sortListByKey(filteredWindmills).slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <SearchBar<Windmill> items={windmills} searchField="model" onFilteredResults={handleFilteredResults} />

      <ContentTable<Windmill>
        columns={columns}
        items={currentItems}
        renderRow={(windmill) => (
          <WindMillListItem windmill={windmill} columns={columns} onListChange={handleListChange} />
        )}
      />

      <Pagination
        currentPage={currentPage}
        totalItems={filteredWindmills.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default WindMillList;
