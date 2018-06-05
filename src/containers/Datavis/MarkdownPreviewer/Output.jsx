import React from 'react';

class Output extends React.Component {
  render() {
    return (
      <div
        className="MarkdownPreviewer__output"
        dangerouslySetInnerHTML={this.props.markDown}
      />
    );
  }
}

export default Output;
