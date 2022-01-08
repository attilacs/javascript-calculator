import NumpadStyled from "../styles/NumpadStyled";
import Button from "./Button";
import buttons from "./buttons";

const Numpad = () => {
  return (
    <NumpadStyled>
      {buttons.map((button) => (
        <Button key={button.id} id={button.id} label={button.label} />
      ))}
    </NumpadStyled>
  );
};

export default Numpad;
