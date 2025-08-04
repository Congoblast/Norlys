import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  /**
   * Contains the children which is the content to be rendered inside the header
   */
  items: any[];
  children?: ReactNode;
}

const ContentRow: React.FC<Props> = (props) => {
  const { items, children } = props;

  console.log(items, "items");
  return (
    <TableBody>
      {items.map((item) => (
        <Cell key={item.key}>{children}</Cell>
      ))}
    </TableBody>
  );
};

const TableBody = styled.div`
  background-color: white;
`;

const Cell = styled.div`
  flex: 1;
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

export default ContentRow;
