import styled from "styled-components";
import { useState } from "react";

interface Props {
  /**
   * The number of items to display per page.
   */
  itemsPerPage: number;
  /**
   * The list of items.
   */
  items: [];
  /**
   * Callback to handle page change.
   */
  onPageChange: (currentPage: number) => void;
}

/**
 * Pagination component for displaying a list of items for pagination.
 */
export const Pagination: React.FC<Props> = (props) => {
  const { items, itemsPerPage, onPageChange } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  return (
    <Root>
      <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;

  border: 1px solid #e0e0e0;
  border-radius: 4px;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #f5f5f5;
  }
`;

const PageInfo = styled.div`
  font-size: 14px;
`;
