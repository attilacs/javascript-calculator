import NumpadStyled from "../styles/NumpadStyled";
import Button from "./Button";

const Numpad = () => {
  return (
    <NumpadStyled>
      <Button label="=" id="equals" />
      <Button label="0" id="zero" />
      <Button label="1" id="one" />
      <Button label="2" id="two" />
      <Button label="3" id="three" />
      <Button label="4" id="four" />
      <Button label="5" id="five" />
      <Button label="6" id="six" />
      <Button label="7" id="seven" />
      <Button label="8" id="eight" />
      <Button label="9" id="nine" />
      <Button label="+" id="add" />
      <Button label="-" id="subtract" />
      <Button label="x" id="multiply" />
      <Button label="/" id="divide" />
      <Button label="." id="decimal" />
      <Button label="AC" id="clear" />
    </NumpadStyled>
  );
};

export default Numpad;
