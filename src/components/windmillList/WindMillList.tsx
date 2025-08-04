import { useMemo, useState } from "react";
import { useWindmillContext } from "../../providers/WindmillProvider";
import type { Windmill } from "../../services/windmill-types";
import Pagination from "../pagination/pagination";
import ContentTable from "../contentTable/ContentTable";
import SearchInput from "../search/SearchInput";
import AccordionHeader from "../accordion/accordionHeader/AccordionHeader";
import AccordionContent from "../accordion/accordionContent/AccordionContent";
import Accordion from "../accordion/Accordion";
import ContentRow from "../contentTable/ContentRow";

export const columns: Array<{ key: keyof Windmill; label: string }> = [
  { key: "id", label: "ID" },
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
];

const ITEMS_PER_PAGE = 9;

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
      {/* <ContentTable columns={columns} currentItems={currentItems}>
        <Accordion>
          <AccordionContent>child</AccordionContent>
        </Accordion>
      </ContentTable> */}

      <Accordion>
        <AccordionHeader>
          <p> data</p>
        </AccordionHeader>
        <AccordionContent>
          <p>child</p>
        </AccordionContent>
      </Accordion>
      <Pagination
        currentPage={currentPage}
        totalItems={windmills.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default WindMillList;
