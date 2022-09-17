import { RandomDefaultType } from "../models";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const createRandomNumber = (randomType: RandomDefaultType): string => {
  switch (randomType) {
    case RandomDefaultType.hue:
      return `${getRandomInt(360)}`;
      break;
    case RandomDefaultType.percentage:
      return `${getRandomInt(101)}%`;
      break;
    case RandomDefaultType.colour:
      return `${getRandomInt(256)}`;
      break;
    case RandomDefaultType.alpha:
      const num = Math.random();
      return `${Math.round(num * 10) / 10}`;
      break;
    default:
      return "";
      break;
  }
};
