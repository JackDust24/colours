import { getColour } from "../service";
import { ColourType } from "../models";

type Colours = {
  title: string;
  colour: number;
};

export async function getColoursPayload(): Promise<Array<Colours>> {
  const colourRGB = await getColour(ColourType.RGB);
  const colourRGBA = await getColour(ColourType.RGBA);
  const colourHSLA = await getColour(ColourType.HSLA);
  const colourHEX = await getColour(ColourType.HEX);
  const colourHSL = await getColour(ColourType.HSL);

  const arrayOfColours = [
    colourRGB,
    colourRGBA,
    colourHSLA,
    colourHEX,
    colourHSL,
  ];

  return arrayOfColours;
}
