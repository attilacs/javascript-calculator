const maxInputLength = 20;

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

export const isLengthExceeded = (value: string) => {
  let maxLength = maxInputLength;
  const first = getFirstChar(value);
  if (first === "-") {
    maxLength++;
  }
  return value.length >= maxLength;
};

export const limitDisplayedLength = (value: number) => {
  const valueStr = value + "";
  let maxLength = maxInputLength;
  const first = getFirstChar(valueStr);
  if (first === "-") {
    maxLength++;
  }
  return valueStr.slice(0, maxLength);
};

export const removeTrailingZeros = (value: string) => parseFloat(value) + "";
export const replaceMultiplyChar = (value: string) =>
  value.replaceAll("x", "*");

export const isNumber = (value: string) => "0" <= value && value <= "9";
export const isOperator = (value: string) => /[x/+-]/.test(value);
export const getFirstChar = (value: string) => value.slice(0, 1);
export const getLastChar = (value: string) => value.slice(-1);
