import React, { SVGProps } from 'react';

interface LetterProps extends SVGProps<SVGTSpanElement> {}

function SVGLetter({ children, ...rest }: LetterProps) {
  return (
    <tspan {...rest} dx="-8">{children}</tspan>
  )
}

export default SVGLetter;
