import styled from "styled-components";

const Navigation: React.FC = () => {
  return (
    <Root>
      <p>Norlys Application </p>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  background-color: #3c59ec;
  justify-content: center;
`;

export default Navigation;
