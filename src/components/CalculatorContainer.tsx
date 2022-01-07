import CalculatorContainerStyled from "../styles/CalculatorContainerStyled";
import Display from "./Display";
import Numpad from "./Numpad";

const CalculatorContainer = () => {
  return (
    <CalculatorContainerStyled>
      <Display />
      <Numpad />
    </CalculatorContainerStyled>
  );
};

export default CalculatorContainer;
