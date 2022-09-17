import * as React from "react";
import { callAPI } from "../services/index";
import ColourSwatch from "../shared/ColourSwatch";

/* eslint-disable-next-line */
export interface ColourContainerProps {
  data: any;
}

export function ColourContainer(props: ColourContainerProps) {
  const { data } = props;

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-5 gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <ColourSwatch
                key={`${item}, ${index}`}
                title={item.title}
                colour={item.colour}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ColourContainer;
