import React, { Component } from 'react';
import './Calculator.scss';

class Calculator extends Component {
  handleClick = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="Calculator">
        <h1>Calculator</h1>
        <div className="jumbotron" id="calc">
          <div className="displayBox text-right">
            <h2 className="problem">0</h2>
            <h1 className="answer">0</h1>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-default btn-lg btn-wide allClear"
              onClick={this.handleClick}
              value="AC"
            >
              AC
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg clear"
              onClick={this.handleClick}
              value="C"
            >
              C
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg divide"
              onClick={this.handleClick}
              value="/"
            >
              ÷
            </button>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-default btn-lg btn-7"
              onClick={this.handleClick}
              value="7"
            >
              7
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-8"
              onClick={this.handleClick}
              value="8"
            >
              8
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-9"
              onClick={this.handleClick}
              value="9"
            >
              9
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg multiply"
              onClick={this.handleClick}
              value="*"
            >
              x
            </button>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-default btn-lg btn-4"
              onClick={this.handleClick}
              value="4"
            >
              4
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-5"
              onClick={this.handleClick}
              value="5"
            >
              5
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-6"
              onClick={this.handleClick}
              value="6"
            >
              6
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg subtract"
              onClick={this.handleClick}
              value="-"
            >
              -
            </button>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-default btn-lg btn-1"
              onClick={this.handleClick}
              value="1"
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-2"
              onClick={this.handleClick}
              value="2"
            >
              2
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-3"
              onClick={this.handleClick}
              value="3"
            >
              3
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg add"
              onClick={this.handleClick}
              value="+"
            >
              +
            </button>
          </div>

          <div className="button-row">
            <button
              type="button"
              className="btn btn-default btn-lg btn-0"
              onClick={this.handleClick}
              value="0"
            >
              0
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg decimal"
              onClick={this.handleClick}
              value="."
            >
              .
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-wide equals"
              onClick={this.handleClick}
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
