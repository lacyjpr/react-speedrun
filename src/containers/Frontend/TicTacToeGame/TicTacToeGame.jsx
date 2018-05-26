import React, { Component } from 'react';
import win from './../../../assets/win.mp3';
import lose from './../../../assets/lose.mp3';
import draw from './../../../assets/draw.mp3';
import './TicTacToeGame.scss';

class TicTacToeGame extends Component {
  constructor() {
    super();

    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      running: false,
      human: false,
      computer: true,
      HUMVAL: -1,
      COMVAL: 1,
      humSymbol: 'X',
      comSymbol: 'O',
      difficulty: 'easy',
      empties: [],
      winMatrix: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    this.win = new Audio(win);
    this.lose = new Audio(lose);
    this.draw = new Audio(draw);

    // Dom elements
    let squares = document.getElementsByClassName('square');
    let playerX = document.getElementById('playerX');
    let playerO = document.getElementById('playerO');
    let $reset = document.getElementById('reset');
    let win = document.getElementById('win');
    let lose = document.getElementById('lose');
    let draw = document.getElementById('draw');

    // Hide win lose draw messages
    win.style.display = 'none';
    lose.style.display = 'none';
    draw.style.display = 'none';
  }
  setDifficulty = e => {
    console.log(e.target.value);
  };

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
            <form name="hardness" onChange={this.setDifficulty}>
              <input
                type="radio"
                name="difficulty"
                value="easy"
                defaultChecked
              />
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
