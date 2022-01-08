export const roundNumber = (n: number) => {
  const decimalPlaces = 10;
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(n * multiplier) / multiplier;
};

export const clearCalculator = (
  displaySetter: React.Dispatch<React.SetStateAction<string>>,
  formulaSetter: React.Dispatch<React.SetStateAction<string>>
) => {
  displaySetter("0");
  formulaSetter("");
};
