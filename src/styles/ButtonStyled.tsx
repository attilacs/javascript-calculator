import styled from "styled-components";

const ButtonStyled = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color};
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: monospace;
  font-size: 20px;
  grid-area: ${(props) => props.theme.area};
  justify-content: center;
  min-width: 35px;
  padding: 20px;
`;

export default ButtonStyled;
