import styled from "styled-components";
import { ContentTableHeader } from "./ContentTableHeader";

interface Props {
  /**
   * The columns to be displayed in the table header.
   */
  columns: { key: string; label: string }[];
  /**
   * The items to be displayed in the table body.
   */
  items: {}[];
  /**
   * Component to render each row in the table body.
   */
  renderRow: (item: {}) => React.ReactNode;
}

/**
 * ContentTable is a component that displays a table with headers and rows. Requires
 * and array of columns and an array of items to render.
 */
export const ContentTable: React.FC<Props> = (props) => {
  const { columns, items, renderRow } = props;

  return (
    <Root>
      <ContentTableHeader columns={columns} />
      {items.map((item, index) => (
        <div key={index}>{renderRow(item)}</div>
      ))}
    </Root>
  );
};

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;
