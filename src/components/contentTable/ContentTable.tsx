import styled from "styled-components";
import ContentTableHeader from "./ContentTableHeader";
import type { BaseTableProps } from "./ContentTableTypes";

interface Props<TItem> extends BaseTableProps {
  items: TItem[];
  renderRow: (item: TItem) => React.ReactNode;
}

const ContentTable = <TItem,>(props: Props<TItem>) => {
  const { columns, items, renderRow } = props;

  return (
    <TableContainer>
      <ContentTableHeader columns={columns} />
      <TableBody>
        {items.map((item, index) => (
          <div key={index}>{renderRow(item)}</div>
        ))}
      </TableBody>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const TableBody = styled.div`
  background-color: white;
`;

export default ContentTable;
