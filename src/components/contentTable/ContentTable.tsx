import styled from "styled-components";
import ContentRow from "./ContentRow";
import ContentTableHeader from "./ContentTableHeader";

interface Props<T> {
  columns: Array<{ key: keyof T; label: string }>;
  currentItems: T[];
  children?: React.ReactNode;
}

function ContentTable<T>(props: Props<T>) {
  const { columns, currentItems, children } = props;

  console.log(currentItems, "items");
  return (
    <TableContainer>
      <ContentTableHeader columns={columns} />
      <ContentRow items={currentItems} columns={columns}>
        {children}
      </ContentRow>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;
`

`;
export default ContentTable;
