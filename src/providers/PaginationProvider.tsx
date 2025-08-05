import React, { createContext, useState } from "react";

interface PaginationProviderProps extends React.PropsWithChildren {
  itemsPerPage: number;
}

interface PaginationContextType {
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (page: number) => void;
  indexOfLastItem: number;
  indexOfFirstItem: number;
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const contextValue: PaginationContextType = {
    currentPage,
    itemsPerPage,
    handlePageChange,
    indexOfLastItem,
    indexOfFirstItem,
  };

  return <PaginationContext.Provider value={contextValue}>{children}</PaginationContext.Provider>;
};

export const usePaginationContext = () => {
  const context = React.useContext(PaginationContext);
  if (!context) {
    throw new Error("usePaginationContext must be used within a PaginationProvider");
  }
  return context;
};
