import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
body {
  align-items: center;
  background-color: lightgray;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  user-select: none;
}`;

export default AppStyled;
