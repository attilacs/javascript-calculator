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
  };

  return (
    <ButtonStyled
      id={id}
      theme={{ area: id, color: color }}
      onClick={onInput}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
