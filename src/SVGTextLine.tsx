import React, { SVGProps } from 'react';
import SVGText from "./SVGText";
import SVGLetter from "./SVGLetter";

const NEW_LINE_CHAR = /[\r\n]/

const colors: string[] = [
  '#479BDF',
  '#00CC66',
  '#FFAB2C',
  '#FF6666'
]

const fontSizes = [96, 96, 92]

const textRotations = [-5, 2.5, -2.5, 1.5, -5, -2.5, 2.5]

function randomIndex <T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length)
}

function randomItem<T>(arr: T[]): T {
  return arr[randomIndex(arr)];
}

export interface SVGTextLineProps extends SVGProps<SVGTextElement> {
  text: string;
  hasOutline?: boolean;
  isHey?: boolean;
}

function SVGTextLine ({ text, hasOutline = true, isHey = false, ...rest }: SVGTextLineProps) {
  let chosenColors: string[] = []
  const styles: SVGProps<SVGTSpanElement>[] = text.split('').map((l, i) => {
    if (NEW_LINE_CHAR.test(l)) {
      return {}
    }

    if (chosenColors.length === 0) {
      chosenColors = [...colors];
    }

    return {
      fill: chosenColors.splice(randomIndex(chosenColors), 1)[0],
      fontSize: isHey ? 64 : randomItem(fontSizes)
    };
  })

  const children = text.split('').map((l, i) => (
    <SVGLetter key={i} {...styles[i]} dx="-8" rotate={textRotations[i % 7]}>{l}</SVGLetter>
  ))

  return (
    <>
      {hasOutline &&
        <SVGText {...rest} outline>
          {children}
        </SVGText>
      }
      <SVGText {...rest}>
        {children}
      </SVGText>
    </>
  )
}

export default SVGTextLine;
