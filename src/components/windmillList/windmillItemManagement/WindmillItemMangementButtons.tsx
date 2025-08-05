import styled from "styled-components";

interface Props {
  /**
   * Callback function when delete button is clicked.
   */
  deleteOnClick: () => void;
  /**
   * Callback function when update button is clicked.
   */
  updateOnClick: () => void;
}
/**
 * Buttons for manging windmill items
 */
export const WindmillItemManagementButtons: React.FC<Props> = (props) => {
  const { deleteOnClick, updateOnClick } = props;

  return (
    <Root>
      <Button color="#076f40" onClick={updateOnClick}>
        Update Windmill
      </Button>
      <Button width="50%" color="#ba0c2f" onClick={deleteOnClick}>
        DELETE
      </Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Button = styled.button<{ color: string; width?: string }>`
  font-size: 1.2rem;
  padding: 16px 24px;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-width: ${({ width }) => width || "100%"};

  &:hover {
    background-color: ${({ color }) => color};
    opacity: 0.9;
  }
`;
