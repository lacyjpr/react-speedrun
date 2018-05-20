import React, { Component } from 'react';
import './Calculator.scss';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      formula: [0],
      solution: '0',
    };
  }

  handleClick = e => {
    e.preventDefault();
    const val = e.target.value;
    switch (val) {
      case '0':
        this.zero(val);
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.digit(val);
        break;
      case '.':
        this.decimal(val);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.operator(val);
        break;
      case '=':
        this.equals();
        break;
      case 'AC':
        this.allClear();
        break;
      case 'C':
        this.clear();
        break;
    }
  };

  zero = val => {
    const { formula, solution } = this.state;
    // If formula already holds a value from a previous calculation and a number is clicked, clear formula
    // if (typeof formula[0] === 'number' && formula.length === 1) {
    //   this.setState({ formula: [0] });
    //   this.setState({ solution: '0' });
    // }
    // Push the digit into formula if solution's length is less than 10
    // If solution already contains only a zero do nothing
    // Prevent divide by zero
    if (
      solution.length < 10 &&
      solution !== '0' &&
      formula[formula.length - 1] !== '/'
    ) {
      formula.push(val);
      this.setState({ formula });
      this.setState({ solution: solution + val });
    }
  };

  digit = val => {
    const { formula, solution } = this.state;
    if (typeof formula[0] === 'number' && formula.length === 1) {
      this.setState({ formula: [] });
      this.setState({ solution: '' });
    }
    // Prevent multiple zeros at the beginning of a number
    if (solution === '0') {
      this.setState({ solution: val });
      formula.pop();
      formula.push(val);
      this.setState({ formula });
    }
    // Push the digit into formula if solution's length is less than 10
    else if (solution.length < 10) {
      formula.push(val);
      this.setState({ formula });
      this.setState({ solution: solution + val });
    }
  };

  decimal = val => {
    const { formula, solution } = this.state;
    // Prevent multiple decimal points in an entry
    if (solution.length < 10 && solution.indexOf('.') === -1) {
      formula.push(val);
      this.setState({ formula });
      this.setState({ solution: solution + val });
    }
  };

  operator = val => {
    const { formula } = this.state;
    // Prevent multiple operators in a row & at the start of a formula
    if (
      formula[formula.length - 1] !== '+' &&
      formula[formula.length - 1] !== '-' &&
      formula[formula.length - 1] !== '*' &&
      formula[formula.length - 1] !== '/' &&
      formula[formula.length - 1] !== '.' &&
      formula.length > 0
    ) {
      formula.push(val);
      this.setState({ formula });
      // Empty solution so next digit entered doesn't also display the operator
      this.setState({ solution: '' });
    }
  };

  equals = () => {
    let { formula } = this.state;
    // evaluate the formula
    const str = formula.join('');
    let finalSolution = eval(str);
    // Convert finalSolution to number
    finalSolution = parseFloat(finalSolution);
    // Round to 10 decimal places
    finalSolution = Math.round(10000000000 * finalSolution) / 10000000000;
    // Prevent scientific notation + remove trailing zeros credit: http://stackoverflow.com/questions/1015402/chop-unused-decimals-with-javascript
    finalSolution = finalSolution.toFixed(10).replace(/(\.[0-9]*?)0+$/, '$1');
    // Remove trailing decimal points credit: http://stackoverflow.com/questions/1015402/chop-unused-decimals-with-javascript
    finalSolution = finalSolution.replace(/\.$/, '');
    // Prevent answers too long for display
    if (finalSolution > 9999999999 || finalSolution < -999999999) {
      this.setState({ solution: 'Overflow!' });
    } else {
      // Save finalSolution as a number so zero & digit functions work
      var finalSolution2 = parseFloat(finalSolution);
      // Keep the final solution in formula
      this.setState({ formula: [finalSolution2] });
      this.setState({ solution: finalSolution });
    }
  };

  allClear = () => {
    this.setState({ formula: [0] });
    this.setState({ solution: '0' });
  };

  clear = () => {
    let { formula, solution } = this.state;
    formula.splice(-1, 1);
    solution = solution.substring(0, solution.length - 1);
    this.setState({ formula });
    this.setState({ solution });
    if (formula.length === 0) {
      this.setState({ formula: [0] });
    }
    if (solution.length === 0) {
      this.setState({ solution: '0' });
    }
  };

  render() {
    return (
      <div className="Calculator">
        <h1>Calculator</h1>
        <div className="jumbotron Calculator__jumbotron" id="calc">
          <div className="Calculator__displayBox text-right">
            <h2 className="Calculator__problem">{this.state.formula}</h2>
            <h1 className="Calculator__answer">{this.state.solution}</h1>
          </div>

          <div className="Calculator__button-row">
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
