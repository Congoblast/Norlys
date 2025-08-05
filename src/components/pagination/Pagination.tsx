import styled from "styled-components";
import { usePaginationContext } from "../../providers/PaginationProvider";

interface Props {
  items: [];
}

export const Pagination: React.FC<Props> = ({ items }) => {
  const { currentPage, itemsPerPage, handlePageChange } = usePaginationContext();

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <Container>
      <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Container>
  );
};

const Container = styled.div`
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
  background: white;
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
