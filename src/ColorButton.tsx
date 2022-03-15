import React, { useCallback, MouseEventHandler } from 'react';
import CircleButton from "./CircleButton";

export interface ColorButtonProps {
  isActive: boolean;
  name: string;
  color: string;
  onClick: (color: string) => void
}

function ColorButton({ name, color, onClick, isActive }: ColorButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    onClick(color);
  }, [onClick, color])

  return (
    <CircleButton
      label={name}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {isActive ? <>&#10003;</> : <>&#8203;</>}
    </CircleButton>
  );
}

export default ColorButton;
