import styled from "styled-components";
import { ContentTableHeader } from "./contentTableHeader/ContentTableHeader";

interface Props {
  columns: { key: string; label: string }[];
  items: {}[];
  renderRow: (item: {}) => React.ReactNode;
}

export const ContentTable: React.FC<Props> = (props) => {
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
