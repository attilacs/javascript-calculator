import { useState } from "react";
import CalculatorContainerStyled from "../styles/CalculatorContainerStyled";
import Display from "./Display";
import Formula from "./Formula";
import Numpad from "./Numpad";
import {
  clearCalculator,
  getFirstChar,
  getLastChar,
  isLengthExceeded,
  isNumber,
  isOperator
} from "./service";

const CalculatorContainer = () => {
  const [displayedValue, setDisplayedValue] = useState("0");
  const [formula, setFormula] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(true);

  const initCalculator = () => {
    clearCalculator(setDisplayedValue, setFormula);
  };

  const handleNumberInput = (value: string) => {
    if (isLengthExceeded(displayedValue)) {
      return;
    }
    if (isEvaluated) {
      initCalculator();
      setIsEvaluated(false);
      setDisplayedValue(value);
      return;
    }
    if (displayedValue === "0") {
      setDisplayedValue(value);
      return;
    }
    const prevValue = getLastChar(displayedValue);
    if (isOperator(prevValue)) {
      if (displayedValue.length === 2) {
        const first = getFirstChar(displayedValue);
        setFormula(formula + first);
        setDisplayedValue("-" + value);
        return;
      }
      setFormula(formula + displayedValue);
      setDisplayedValue(value);
      return;
    }
    setDisplayedValue(displayedValue + value);
  };

  const handleInput = (value: string) => {
    if (value === "AC") {
      initCalculator();
    }
    if (isNumber(value)) {
      handleNumberInput(value);
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
