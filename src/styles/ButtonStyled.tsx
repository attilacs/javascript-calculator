import styled from "styled-components";

const ButtonStyled = styled.div`
  align-items: center;
  background-color: gray;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  grid-area: ${(props) => props.theme.area};
  justify-content: center;
  min-width: 25px;
  padding: 5px;
`;

export default ButtonStyled;
