import React from 'react';

const Button = ({ equals, clear, value, handleClick }) => (
  <button
    type="button"
    className={`btn btn-default btn-lg ${equals ? 'equals' : ''} ${
      clear ? 'clear' : ''
    }`}
    onClick={handleClick}
    value={value}
  >
    {value}
  </button>
);

export default Button;
