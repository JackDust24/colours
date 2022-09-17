import * as React from "react";
import tinycolor from "tinycolor2";

/* eslint-disable-next-line */
export interface ColourSwatchProps {
  title: string;
  colour: string;
}

export function ColourSwatch(props: ColourSwatchProps) {
  const { title, colour } = props;
  return (
    <div>
      <p className="text-natural-500">{title}</p>
      <div
        className="border border-neutral-500 w-40 h-80"
        style={{ backgroundColor: `${colour}` }}
      ></div>
    </div>
  );
}

export default ColourSwatch;
