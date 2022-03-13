import React, {HTMLAttributes} from 'react';
import './CircleButton.css'

export interface CircleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

function CircleButton({ label, ...rest }: CircleButtonProps) {
  return (
    <button
      {...rest}
      aria-label={label}
      className="circle-button button is-rounded is-borderless is-paddingless"
    />
  );
}

export default CircleButton;
