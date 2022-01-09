import { evaluate } from "mathjs";
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
  isOperator,
  limitDisplayedLength,
  removeTrailingZeros,
  replaceMultiplyChar,
  roundNumber
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

  const handleDecimal = (value: string) => {
    if (isLengthExceeded(displayedValue)) {
      return;
    }
    if (displayedValue.includes(".")) {
      return;
    }
    if (isEvaluated) {
      initCalculator();
      setIsEvaluated(false);
    }
    const prevValue = getLastChar(displayedValue);
    if (isOperator(prevValue)) {
      if (displayedValue.length === 2) {
        const first = getFirstChar(displayedValue);
        setFormula(formula + first);
        setDisplayedValue("-0" + value);
        return;
      }
      setFormula(formula + displayedValue);
      setDisplayedValue("0" + value);
      return;
    }
    setDisplayedValue(displayedValue + value);
  };

  const handleOperator = (value: string) => {
    if (isEvaluated) {
      setFormula(displayedValue);
      setDisplayedValue(value);
      setIsEvaluated(false);
      return;
    }
    const prevValue = getLastChar(displayedValue);
    if (prevValue === ".") {
      const sliced = displayedValue.slice(0, displayedValue.length - 1);
      setFormula(formula + sliced);
      setDisplayedValue(value);
      return;
    }
    if (isOperator(prevValue)) {
      if (displayedValue.length === 1) {
        if (value === "-") {
          setDisplayedValue(displayedValue + value);
        } else {
          setDisplayedValue(value);
        }
      }
    }
    if (isNumber(prevValue)) {
      setFormula(formula + removeTrailingZeros(displayedValue));
      setDisplayedValue(value);
    }
  };

  const handleEvaluate = (value: string) => {
    if (isEvaluated) {
      return;
    }
    const prevValue = getLastChar(displayedValue);
    if (isOperator(prevValue)) {
      const evaluated = evaluate(replaceMultiplyChar(formula));
      setDisplayedValue(evaluated);
      setIsEvaluated(true);
      return;
    }
    const toFormula = formula + removeTrailingZeros(displayedValue);
    setFormula(toFormula);
    const toEvaluate = replaceMultiplyChar(toFormula);
    let evaluated = evaluate(toEvaluate);
    evaluated = roundNumber(evaluated);
    evaluated = limitDisplayedLength(evaluated);
    setDisplayedValue(evaluated);
    setIsEvaluated(true);
  };

  const handleInput = (value: string) => {
    if (value === "AC") {
      initCalculator();
    }
    if (isNumber(value)) {
      handleNumberInput(value);
    }
    if (value === ".") {
      handleDecimal(value);
    }
    if (isOperator(value)) {
      handleOperator(value);
    }
    if (value === "=") {
      handleEvaluate(value);
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
