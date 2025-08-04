import styled from "styled-components";

interface Props {
  /**
   * Contains the children which is the content to be rendered inside the header
   */
  columns: { key: string; label: string }[];
}

const ContentTableHeader: React.FC<Props> = (props) => {
  const { columns } = props;

  return (
    <Root>
      {columns.map((column) => (
        <Cell key={column.key}>{column.label}</Cell>
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

const Cell = styled.div`
  flex: 1;
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

export default ContentTableHeader;
