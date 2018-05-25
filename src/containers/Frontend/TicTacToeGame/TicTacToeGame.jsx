import React, { Component } from 'react';
import './TicTacToeGame.scss';

class TicTacToeGame extends Component {
  render() {
    return (
      <div className="TicTacToeGame">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div id="player">
            <p>Play as:</p>
            <button className="button" id="playerX">
              X
            </button>
            <button className="button" id="playerO">
              O
            </button>
          </div>

          <div
            className="square"
            id="top-left"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="top-middle"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="top-right"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="middle-left"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="middle-middle"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="middle-right"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="bottom-left"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="bottom-middle"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />
          <div
            className="square"
            id="bottom-right"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          />

          <div
            className="button"
            id="reset"
            role="button"
            tabIndex={0}
            onClick={this.doSomething}
            onKeyPress={this.handleKeyPress}
          >
            Reset
          </div>

          <div className="difficulty">
            <form name="hardness">
              <input type="radio" name="difficulty" value="easy" />
              Easy
              <input type="radio" name="difficulty" value="medium" />
              Medium
              <input type="radio" name="difficulty" value="hard" />
              Hard
            </form>
          </div>

          <div className="display">
            <h1 id="win">You Win!</h1>
            <h1 id="lose">You Lose!</h1>
            <h1 id="draw">Draw!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToeGame;
