import { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";

interface Props<TItem> {
  /**
   * The list of items to search through.
   */
  items: TItem[];
  /**
   * The field in the item to search against. This should be a key of the item type.
   */
  searchField: keyof TItem;
  /**
   * Callback to handle the filtered results.
   * @param items The filtered list of items.
   * @returns List of items that match the query.
   */
  onFilteredResults: (items: TItem[]) => void;
}

/**
 * SearchBar component that allows searching through a list of items based on a specified field.
 */
export function SearchBar<TItem>(props: Props<TItem>) {
  const { items, searchField, onFilteredResults } = props;

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
