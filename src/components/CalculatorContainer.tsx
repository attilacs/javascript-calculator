import { useState } from "react";
import CalculatorContainerStyled from "../styles/CalculatorContainerStyled";
import Display from "./Display";
import Formula from "./Formula";
import Numpad from "./Numpad";

const CalculatorContainer = () => {
  const [displayedValue, setDisplayedValue] = useState("0");
  const [formula, setFormula] = useState("");

  return (
    <CalculatorContainerStyled>
      <Formula formula={formula} />
      <Display value={displayedValue} />
      <Numpad />
    </CalculatorContainerStyled>
  );
};

export default CalculatorContainer;
