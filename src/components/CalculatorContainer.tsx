import { useState } from "react";
import CalculatorContainerStyled from "../styles/CalculatorContainerStyled";
import Display from "./Display";
import Formula from "./Formula";
import Numpad from "./Numpad";
import { clearCalculator } from "./service";

const CalculatorContainer = () => {
  const [displayedValue, setDisplayedValue] = useState("0");
  const [formula, setFormula] = useState("");

  const handleInput = (value: string) => {
    if (value === "AC") {
      clearCalculator(setDisplayedValue, setFormula);
    }
  };

  return (
    <CalculatorContainerStyled>
      <Formula formula={formula} />
      <Display value={displayedValue} />
      <Numpad handleInput={handleInput} />
    </CalculatorContainerStyled>
  );
};

export default CalculatorContainer;
