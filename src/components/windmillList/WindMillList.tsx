import { useCallback, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../types/windmill/WindmillTypes";
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
    return <LoadingState>Loading list...</LoadingState>;
  }

  if (windmills.length === 0 && !loading) {
    return <LoadingState>Error encountered when trying to retrieve Database. </LoadingState>;
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

  return (
    <Root>
      <SearchBarContainer>
        <SearchBar items={windmills as []} searchField="model" onFilteredResults={handleFilteredResults} />
      </SearchBarContainer>
      <ContentTable
        columns={WINDMILL_COLUMNS}
        items={shownItems}
        renderRow={(windmill) => <WindmillListItem windmill={windmill as Windmill} dataColumns={WINDMILL_COLUMNS} />}
      />
      <Pagination itemsPerPage={ITEMS_PER_PAGE} items={filteredWindmills as []} onPageChange={handlePageChange} />
    </Root>
  );
};

const Root = styled.div`
  padding: 16px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 16px;
`;

const LoadingState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;
