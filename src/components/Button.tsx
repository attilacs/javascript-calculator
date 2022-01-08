import ButtonStyled from "../styles/ButtonStyled";

interface ButtonProps {
  label: string;
  id: string;
  handleInput: Function;
}

const Button = ({ label, id, handleInput }: ButtonProps) => {
  const onInput = () => {
    handleInput(label);
  };

  return (
    <ButtonStyled id={id} theme={{ area: id }} onClick={onInput}>
      {label}
    </ButtonStyled>
  );
};

export default Button;
