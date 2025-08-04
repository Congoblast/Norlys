import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";

interface Props<T> {
  items: T[];
  searchField: keyof T;
  onFilteredResults: (items: T[]) => void;
}

function SearchBar<T>({ items, searchField, onFilteredResults }: Props<T>) {
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
