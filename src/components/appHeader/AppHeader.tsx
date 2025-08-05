import styled from "styled-components";

export const AppHeader: React.FC = () => {
  return (
    <Root>
      <p>Norlys Application </p>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  background-color: #ba0c2f;
  justify-content: center;
`;
