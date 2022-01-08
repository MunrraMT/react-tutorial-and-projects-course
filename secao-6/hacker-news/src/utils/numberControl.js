export const numberIncrease = (number, max) =>
  number === max ? 0 : Number(number) + 1;

export const numberDecrease = (number, max) =>
  number === 0 ? max : Number(number) - 1;
