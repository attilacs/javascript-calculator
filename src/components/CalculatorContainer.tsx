import { useState } from "react";
import CalculatorContainerStyled from "../styles/CalculatorContainerStyled";
import Display from "./Display";
import Numpad from "./Numpad";

const CalculatorContainer = () => {
  const [displayedValue, setDisplayedValue] = useState("0");
  const [formula, setFormula] = useState("");

  return (
    <CalculatorContainerStyled>
      <Display value={displayedValue} />
      <Numpad />
    </CalculatorContainerStyled>
  );
};

export default CalculatorContainer;
