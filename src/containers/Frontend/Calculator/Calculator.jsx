import React, { Component } from 'react';

import Button from './Button';

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
    const operands = ['+', '-', '*', '/', '.'];
    const isNotOp = !~operands.indexOf(formula[formula.length - 1]);
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
    const operands = ['+', '-', '*', '/'];
    const isNotOp = !~operands.indexOf(formula[formula.length - 1]);
    if (isNotOp) {
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
            <Button value={'C'} handleClick={this.handleClick} clear />
            <Button value={'/'} handleClick={this.handleClick} />
          </div>

          <div className="Calculator__button-row">
            <Button value={'7'} handleClick={this.handleClick} />
            <Button value={'8'} handleClick={this.handleClick} />
            <Button value={'9'} handleClick={this.handleClick} />
            <Button value={'*'} handleClick={this.handleClick} />
          </div>

          <div className="Calculator__button-row">
            <Button value={'4'} handleClick={this.handleClick} />
            <Button value={'5'} handleClick={this.handleClick} />
            <Button value={'6'} handleClick={this.handleClick} />
            <Button value={'-'} handleClick={this.handleClick} />
          </div>

          <div className="Calculator__button-row">
            <Button value={'1'} handleClick={this.handleClick} />
            <Button value={'2'} handleClick={this.handleClick} />
            <Button value={'3'} handleClick={this.handleClick} />
            <Button value={'+'} handleClick={this.handleClick} />
          </div>

          <div className="Calculator__button-row">
            <Button value={'0'} handleClick={this.handleClick} />
            <Button value={'.'} handleClick={this.handleClick} />
            <Button value={'='} handleClick={this.handleClick} equals />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
