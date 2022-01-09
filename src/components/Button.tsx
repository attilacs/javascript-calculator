import { useState } from "react";
import ButtonStyled from "../styles/ButtonStyled";

interface ButtonProps {
  label: string;
  id: string;
  handleInput: Function;
  color?: string;
}

const Button = ({
  label,
  id,
  handleInput,
  color = "slategray"
}: ButtonProps) => {
  const onInput = () => {
    handleInput(label);
    pressButton();
  };

  const pressButton = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  const [isPressed, setIsPressed] = useState(false);

  return (
    <ButtonStyled
      id={id}
      theme={{ area: id, color: color }}
      onClick={onInput}
      style={{
        transform: `translateX(${isPressed ? "1px" : 0}) translateY(${
          isPressed ? "1px" : 0
        })`
      }}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
