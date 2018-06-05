import React from 'react';

const Input = ({ onChange, value }) => (
  <textarea
    className="MarkdownPreviewer__input"
    onChange={onChange}
    value={value}
  />
);

export default Input;
