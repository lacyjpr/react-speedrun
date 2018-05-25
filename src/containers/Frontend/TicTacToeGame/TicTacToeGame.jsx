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

          <div className="square" id="top-left" />
          <div className="square" id="top-middle" />
          <div className="square" id="top-right" />
          <div className="square" id="middle-left" />
          <div className="square" id="middle-middle" />
          <div className="square" id="middle-right" />
          <div className="square" id="bottom-left" />
          <div className="square" id="bottom-middle" />
          <div className="square" id="bottom-right" />

          <div className="button" id="reset">
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
