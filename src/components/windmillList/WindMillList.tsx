import { useCallback, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import { Pagination } from "../pagination/Pagination";
import WindMillListItem from "./WindMillListItem";
import SearchBar from "../search/SearchBar";
import { sortListByKey } from "../../utils/SortListByKey";
import { usePaginationContext } from "../../providers/PaginationProvider";
import { WINDMILL_COLUMNS } from "./WindmillColumns";
import styled from "styled-components";
import { ContentTable } from "../contentTable/ContentTable";

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
        renderRow={(windmill) => <WindMillListItem windmill={windmill as Windmill} columns={WINDMILL_COLUMNS} />}
      ></ContentTable>

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
