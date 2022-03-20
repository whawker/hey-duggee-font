import React, { SVGProps } from 'react';
import SVGTextLine from "./SVGTextLine";

const NEW_LINE_CHAR = /[\r\n]/;

export interface SVGOutputProps extends SVGProps<SVGSVGElement> {
  text: string;
  outline: boolean;
  background: string;
}

function SVGOutput({ text, outline, background, ...rest }: SVGOutputProps) {
  const lineCount = text.split(NEW_LINE_CHAR).length;

  return (
    <svg {...rest} viewBox={`0 0 750 ${(lineCount * 100) + 115}`}>
      <rect x="0" y="0" width="100%" height="100%" fill={background} />
      {text.split(NEW_LINE_CHAR).map((line, i) => {
        const isHey = line === 'HEY'
        return (
          <SVGTextLine
            key={line}
            text={line}
            isHey={isHey}
            x="50%"
            y={`${(i * 90) + (isHey ? 115 : 100)}`}
            hasOutline={outline}
          />
        )
      })}
    </svg>
  );
}

export default SVGOutput;
