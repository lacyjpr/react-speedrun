import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <textarea
        className="MarkdownPreviewer__input"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default Input;
