import { useMemo, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import WindMillListItem from "./WindMillListItem/WindMillListItem";
import styled from "styled-components";
import SearchInput from "../search/SearchInput";
import Pagination from "../pagination/pagination";
import ContentTableHeader from "../contentTable/ContentTableHeader";
import ContentTable from "../contentTable/ContentRow";
import ContentRow from "../contentTable/ContentRow";

export const columns: Array<{ key: keyof Windmill; label: string }> = [
  { key: "id", label: "ID" },
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
];

const ITEMS_PER_PAGE = 10;

const WindMillList: React.FC = () => {
  const { windmills } = useWindmillContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredWindmills = useMemo(() => {
    return windmills.filter((windmill) => windmill.model.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [windmills, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredWindmills.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <SearchInput value={searchQuery} onChange={handleSearch} placeholder="Search by model..." />

      <TableContainer>
        <ContentTableHeader columns={columns} />
        <ContentRow items={currentItems}>
          {/* {currentItems.map((windmill) => (
            <WindMillListItem key={windmill.id} windmill={windmill} columns={columns} />
          ))} */}
          <WindMillListItem windmill={currentItems} columns={[]} />
        </ContentRow>
        {/* <TableBody>
          {currentItems.map((windmill, index) => (
            <WindMillListItem key={windmill.id ?? index} windmill={windmill} columns={columns} />
          ))}
        </TableBody> */}
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalItems={windmills.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const TableContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderCell = styled.div`
  flex: 1;
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

const TableBody = styled.div`
  background-color: white;
`;

export default WindMillList;
