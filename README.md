## Stage 1

Stage 1 - Implemented. I ran out of time to add a backend to this too; so used the API under Pages as the backend.

## Stage 2

Stage 2 - For Implementing a new colour:

## Create new Colour Space

    1. Under ../api/models add your new colour to the existing ENUM for ColorType:
    export enum ColourType {
        RGB = "RGB",
        RGBA = "RGBA",
        HSL = "HSL",
        HSLA = "HSLA",
        HEX = "HEX",
        << Add your new one here >>
    }

## Amend fucntion to create colour space

    2. Add this type to the Switch case statement under ../api/models, in the function call, i.e.
        case ColourType.RGB:
             const rgb = createColourSwatch(`${colour}`, ColourDefaultType.rgb, false);
             return colourObject(ColourType.RGB, rgb);

        The arguments for createColourSwatch, is 1, your colour type, 2, default colour type (if it is rbg or hsl - see the models file) and 3) if alpha needed.

## Check if Colour Space attributes or range of values need amending

    3. Check the createColourSwatch function to see if any changes needed here to handle your new colour, for example are you doing random calls for red, green and blue, or do you need hue etc. For example:

      if (colourDefault === ColourDefaultType.rgb) {
            const red = createRandomNumber(RandomDefaultType.colour);
            const green = createRandomNumber(RandomDefaultType.colour);
            const blue = createRandomNumber(RandomDefaultType.colour);
            stringToReturn += `${red}, ${green}, ${blue}`;
      }

    Note - Check RandomDefaultType under the Models file, if you need to add a different random variable. Check the helper file if need to add any new random scenarios under ../api/helpers

## Add new Colour Space to Payload

    4. Add your colour to the payload colour call and add to array: - getColoursPayload under ../api/getPayload.
