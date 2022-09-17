import tinycolor from "tinycolor2";
import { RandomDefaultType, ColourDefaultType, ColourType } from "../models";
import { createRandomNumber } from "../helpers";

const convertColourToHex = (convertToHex: string): string => {
  if (convertToHex) {
    let checkColour = tinycolor(convertToHex);
    const validColour = checkColour.isValid();

    if (validColour) {
      return checkColour.toHexString();
    }
  }
  return "";
};

export function createColourSwatch(
  colourType: string,
  colourDefault: ColourDefaultType,
  alpha?: boolean
): string {
  const colourTypeLower = colourType.toLowerCase();
  let stringToReturn = "";

  if (colourDefault === ColourDefaultType.rgb) {
    const red = createRandomNumber(RandomDefaultType.colour);
    const green = createRandomNumber(RandomDefaultType.colour);
    const blue = createRandomNumber(RandomDefaultType.colour);
    stringToReturn += `${red}, ${green}, ${blue}`;
  }

  if (colourDefault === ColourDefaultType.hsl) {
    const hue = createRandomNumber(RandomDefaultType.hue);
    const saturation = createRandomNumber(RandomDefaultType.percentage);
    const lighteness = createRandomNumber(RandomDefaultType.percentage);
    stringToReturn += `${hue}, ${saturation}, ${lighteness}`;
  }

  if (alpha) {
    const alphaNum = createRandomNumber(RandomDefaultType.alpha);
    stringToReturn += `, ${alphaNum}`;
  }

  return `${colourTypeLower}(${stringToReturn})`;
}

export function getColour(colourSpace: ColourType): any {
  const colour = colourSpace.toUpperCase();

  switch (colour) {
    case ColourType.RGB:
      const rgb = createColourSwatch(`${colour}`, ColourDefaultType.rgb, false);
      return colourObject(ColourType.RGB, rgb);
    case ColourType.RGBA:
      const rgba = createColourSwatch(`${colour}`, ColourDefaultType.rgb, true);
      return colourObject(ColourType.RGBA, rgba);
    case ColourType.HSL:
      const hsl = createColourSwatch(`${colour}`, ColourDefaultType.hsl, false);
      return colourObject(ColourType.HSL, hsl);
    case ColourType.HSLA:
      const hsla = createColourSwatch(`${colour}`, ColourDefaultType.hsl, true);
      return colourObject(ColourType.HSLA, hsla);
    case ColourType.HEX:
      const convertToHex = createColourSwatch(
        `rgb`,
        ColourDefaultType.rgb,
        false
      );
      const hex = convertColourToHex(convertToHex);
      return colourObject(ColourType.HEX, hex);
    default:
      const randomConvertToHex = createColourSwatch(
        `rgb`,
        ColourDefaultType.rgb,
        false
      );
      const defColour = convertColourToHex(randomConvertToHex);
      return colourObject(ColourType.HEX, defColour);
  }
}

const colourObject = (colourType: ColourType, colourString: string): any => {
  const obj = {
    title: `${colourType}`,
    colour: `${colourString}`,
  };

  return obj;
};
