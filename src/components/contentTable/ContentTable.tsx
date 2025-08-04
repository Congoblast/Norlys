import styled from "styled-components";
import ContentTableHeader from "./ContentTableHeader";

interface Props<T> {
  columns: Array<{ key: keyof T; label: string }>;
  items: T[];
  renderRow: (item: T) => React.ReactNode;
}

function ContentTable<T>({ columns, items, renderRow }: Props<T>) {
  return (
    <TableContainer>
      <ContentTableHeader<T> columns={columns} />
      <TableBody>
        {items.map((item, index) => (
          <div key={index}>{renderRow(item)}</div>
        ))}
      </TableBody>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const TableBody = styled.div`
  background-color: white;
`;

export default ContentTable;
