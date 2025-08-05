import { useCallback, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import { Pagination } from "../pagination";
import { SearchBar } from "../searchBar";
import { sortListByKey } from "../../utils/SortListByKey";
import { ContentTable } from "../contentTable";
import { WindmillListItem } from ".";
import styled from "styled-components";
import { WINDMILL_COLUMNS } from "./WindmillColumns";

const ITEMS_PER_PAGE = 10;

/**
 * WindmillList component displays a paginated list of windmills.
 */
export const WindmillList: React.FC = () => {
  const { windmills, loading } = useWindmillContext();

  if (windmills.length === 0 && loading) {
    return <PreState>Loading list...</PreState>;
  }

  if (windmills.length === 0 && !loading) {
    return <PreState>Error encountered when trying to retrieve Database. </PreState>;
  }

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

  console.log(windmills, "Windmills in WindmillList");

  return (
    <>
      <SearchBarContainer>
        <SearchBar items={windmills as []} searchField="model" onFilteredResults={handleFilteredResults} />
      </SearchBarContainer>
      <ContentTable
        columns={WINDMILL_COLUMNS}
        items={shownItems}
        renderRow={(windmill) => <WindmillListItem windmill={windmill as Windmill} dataColumns={WINDMILL_COLUMNS} />}
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

const PreState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;
