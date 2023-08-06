import React from 'react';
import './Button.css';

const Button = ({
  children,
  type = 'primary',
  size = 'small',
  block = false,
  icon = false,
}) => {
  // type: primary - success - error
  // size:

  return (
    <div
      className={`btn btn-${type} btn-${size} ${block && 'btn-block'} ${
        icon && 'btn-icon'
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
