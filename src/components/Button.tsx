import ButtonStyled from "../styles/ButtonStyled";

interface ButtonProps {
  label: string;
  id: string;
}

const Button = ({ label, id }: ButtonProps) => {
  return (
    <ButtonStyled id={id} theme={{ area: id }}>
      {label}
    </ButtonStyled>
  );
};

export default Button;
