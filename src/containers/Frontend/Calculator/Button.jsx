import React from 'react';

const Button = ({ value, handleClick }) => (
  <button
    type="button"
    className={`btn btn-default btn-lg btn-${value}`}
    onClick={handleClick}
    value={value}
  >
    {value}
  </button>
);

export default Button;
