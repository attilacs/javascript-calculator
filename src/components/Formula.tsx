import FormulaStyled from "../styles/FormulaStyled";

interface FormulaProps {
  formula: string;
}

const charLimit = 23;

const getFormulaSubstring = (formula: string, charLimit: number) => {
  const size = formula.length;
  return formula.substring(size - charLimit, size);
};

const Formula = ({ formula }: FormulaProps) => {
  return (
    <FormulaStyled>{getFormulaSubstring(formula, charLimit)}</FormulaStyled>
  );
};

export default Formula;
