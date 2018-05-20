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
      case 'C':
        this.allClear();
        break;
    }
  };

  zero = val => {
    const { formula, solution } = this.state;
    // Push the digit into formula if solution's length is less than 10
    // If solution already contains only a zero do nothing
    // Prevent divide by zero
    if (
      solution.length < 10 &&
      solution !== '0' &&
      !isNaN(solution) &&
      formula[formula.length - 1] !== '/'
    ) {
      formula.push(val);
      this.setState({ formula, solution: solution + val });
    }
  };

  digit = val => {
    const { formula, solution } = this.state;
    // Prevent zeros at the beginning of a number
    if (solution === '0') {
      this.setState({ solution: val });
      formula.pop();
      this.setState(({ formula }) => ({ formula: formula.concat(val) }));
    }
    // Push the digit into formula if solution's length is less than 10 & formula's length is less than 20
    else if (solution.length < 10 && formula.length < 20) {
      formula.push(val);
      this.setState({ formula, solution: solution + val });
    }
  };

  decimal = val => {
    const { formula, solution } = this.state;
    // Prevent multiple decimal points in an entry or formula
    if (
      solution.length < 10 &&
      solution.indexOf('.') === -1 &&
      formula.indexOf('.') === -1
    ) {
      formula.push(val);
      this.setState({ formula, solution: solution + val });
    }
  };

  operator = val => {
    const { formula } = this.state;
    // Prevent multiple operators in a row & at the start of a formula, check formula max length
    const ops = ['+', '-', '*', '/', '.'];
    const isNotOp = !~ops.indexOf(formula[formula.length - 1]);
    const hasCorrectLength = formula.length > 0 && formula.length < 20;

    if (isNotOp && hasCorrectLength) {
      formula.push(val);
      this.setState({ formula });
      // Empty solution so next digit entered doesn't also display the operator
      this.setState({ solution: '' });
    }
  };

  equals = () => {
    let { formula } = this.state;
    // Prevent operands at the end of a formula
    if (
      formula[formula.length - 1] !== '+' &&
      formula[formula.length - 1] !== '-' &&
      formula[formula.length - 1] !== '*' &&
      formula[formula.length - 1] !== '/'
    ) {
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
      if (finalSolution.length > 10) {
        this.setState({ solution: 'Overflow!' });
      } else {
        // Save finalSolution as a number so zero & digit functions work
        var finalSolution2 = parseFloat(finalSolution);
        // Keep the final solution in formula
        this.setState({ formula: [finalSolution2], solution: finalSolution });
      }
    }
  };

  allClear = () => {
    this.setState({ formula: [0] });
    this.setState({ solution: '0' });
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
              className="btn btn-default btn-lg btn-big allClear"
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
