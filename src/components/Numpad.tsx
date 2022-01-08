import NumpadStyled from "../styles/NumpadStyled";
import Button from "./Button";
import buttons from "./buttons";

interface NumpadProps {
  handleInput: Function;
}

const Numpad = ({ handleInput }: NumpadProps) => {
  return (
    <NumpadStyled>
      {buttons.map((button) => (
        <Button
          key={button.id}
          id={button.id}
          label={button.label}
          handleInput={handleInput}
        />
      ))}
    </NumpadStyled>
  );
};

export default Numpad;
