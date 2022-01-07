import DisplayStyled from "../styles/DisplayStyled";

interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return <DisplayStyled id="display">{value}</DisplayStyled>;
};

export default Display;
