import { useCallback, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import { Pagination } from "../pagination/Pagination";
import WindMillListItem from "./WindMillListItem";
import { SearchBar } from "../searchBar/SearchBar";
import { sortListByKey } from "../../utils/SortListByKey";
import { WINDMILL_COLUMNS } from "./WindmillColumns";
import styled from "styled-components";
import { ContentTable } from "../contentTable/ContentTable";

const ITEMS_PER_PAGE = 10;

export const WindMillList: React.FC = () => {
  const { windmills } = useWindmillContext();
  const [filteredWindmills, setFilteredWindmills] = useState(windmills);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const shownItems = sortListByKey(filteredWindmills).slice(indexOfFirstItem, indexOfLastItem);

  const handleFilteredResults = useCallback((results: Windmill[]) => {
    setFilteredWindmills(results);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <SearchBarContainer>
        <SearchBar items={windmills as []} searchField="model" onFilteredResults={handleFilteredResults} />
      </SearchBarContainer>
      <ContentTable
        columns={WINDMILL_COLUMNS}
        items={shownItems}
        renderRow={(windmill) => <WindMillListItem windmill={windmill as Windmill} dataColumns={WINDMILL_COLUMNS} />}
      ></ContentTable>
      <Pagination itemsPerPage={ITEMS_PER_PAGE} items={filteredWindmills as []} onPageChange={handlePageChange} />
    </>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 16px;
`;
