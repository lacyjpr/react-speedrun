import React from 'react';

const Output = ({ markDown }) => (
  <div
    className="MarkdownPreviewer__output"
    dangerouslySetInnerHTML={markDown}
  />
);

export default Output;
