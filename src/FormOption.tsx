import React, { ReactNode } from 'react';
import './FormOption.css';

export interface FormOptionProps {
  title: string;
  children: ReactNode;
}

function FormOption({ title, children }: FormOptionProps) {
  return (
    <div className="form-option level-item has-text-centered">
      <p className="heading">{title}</p>
      {children}
    </div>
  );
}

export default FormOption;
