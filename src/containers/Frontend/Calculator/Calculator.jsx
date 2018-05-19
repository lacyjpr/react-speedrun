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
            <button type="button" className="btn btn-default btn-lg clear">
              C
            </button>
            <button type="button" className="btn btn-default btn-lg divide">
              ÷
            </button>
          </div>

          <div className="button-row">
            <button type="button" className="btn btn-default btn-lg btn-7">
              7
            </button>
            <button type="button" className="btn btn-default btn-lg btn-8">
              8
            </button>
            <button type="button" className="btn btn-default btn-lg btn-9">
              9
            </button>
            <button type="button" className="btn btn-default btn-lg multiply">
              x
            </button>
          </div>

          <div className="button-row">
            <button type="button" className="btn btn-default btn-lg btn-4">
              4
            </button>
            <button type="button" className="btn btn-default btn-lg btn-5">
              5
            </button>
            <button type="button" className="btn btn-default btn-lg btn-6">
              6
            </button>
            <button type="button" className="btn btn-default btn-lg subtract">
              -
            </button>
          </div>

          <div className="button-row">
            <button type="button" className="btn btn-default btn-lg btn-1">
              1
            </button>
            <button type="button" className="btn btn-default btn-lg btn-2">
              2
            </button>
            <button type="button" className="btn btn-default btn-lg btn-3">
              3
            </button>
            <button type="button" className="btn btn-default btn-lg add">
              +
            </button>
          </div>

          <div className="button-row">
            <button type="button" className="btn btn-default btn-lg btn-0">
              0
            </button>
            <button type="button" className="btn btn-default btn-lg decimal">
              .
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg btn-wide equals"
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
