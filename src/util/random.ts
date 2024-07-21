// Replace this with your random number generator of choice
export const randomValue = () => Math.random();

export const rv = (min: number, max: number) =>
  Math.abs(randomValue()) * (max - min) + min;

export const ri = (min: number, max: number) =>
  Math.round(randomValue() * (max - min) + min);
