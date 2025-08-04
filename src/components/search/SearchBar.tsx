import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";

interface Props<TItem> {
  items: TItem[];
  searchField: keyof TItem;
  onFilteredResults: (items: TItem[]) => void;
}

function SearchBar<TItem>({ items, searchField, onFilteredResults }: Props<TItem>) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = items.filter((item) =>
      String(item[searchField]).toLowerCase().includes(searchQuery.toLowerCase()),
    );

    onFilteredResults(filtered);
  }, [items, searchField, searchQuery, onFilteredResults]);

  return (
    <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder={`Search by ${String(searchField)}...`} />
  );
}

export default SearchBar;
