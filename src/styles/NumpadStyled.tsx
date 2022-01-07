import styled from "styled-components";

const NumpadStyled = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-areas:
    "clear divide multiply subtract"
    "seven eight nine add"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
`;

export default NumpadStyled;
