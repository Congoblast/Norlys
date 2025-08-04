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
import styled from "styled-components";

const WindMillList: React.FC = () => {
  const { windmills } = useWindmillContext();
  const { indexOfFirstItem, indexOfLastItem } = usePaginationContext();
  const [filteredWindmills, setFilteredWindmills] = useState(windmills);
  const shownItems = sortListByKey(filteredWindmills).slice(indexOfFirstItem, indexOfLastItem);

  const handleFilteredResults = useCallback((results: Windmill[]) => {
    setFilteredWindmills(results);
  }, []);

  return (
    <>
      <SearchBarContainer>
        <SearchBar items={windmills} searchField="model" onFilteredResults={handleFilteredResults} />
      </SearchBarContainer>
      <ContentTable
        columns={WINDMILL_COLUMNS}
        items={shownItems}
        renderRow={(windmill) => <WindMillListItem windmill={windmill} columns={WINDMILL_COLUMNS} />}
      />

      <Pagination items={filteredWindmills as []} />
    </>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;
export default WindMillList;
