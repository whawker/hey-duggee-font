import React, { SVGProps } from 'react';

export interface SVGTextProps extends SVGProps<SVGTextElement> {
  outline?: boolean;
}

function SVGText ({ outline = false, children, ...rest }: SVGTextProps) {
  return (
    <text
      fontFamily="Dunkin Sans Bold"
      fill={outline ? '#fff' : undefined }
      stroke={outline ? '#fff' : undefined }
      strokeWidth={outline ? '18' : undefined }
      dominantBaseline="middle"
      textAnchor="middle"
      {...rest}>
      {children}
    </text>
  )
}

export default SVGText;
