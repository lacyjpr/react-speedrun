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
    this.squares = document.getElementsByClassName('square');
    this.playerX = document.getElementById('playerX');
    this.playerO = document.getElementById('playerO');
    this.$reset = document.getElementById('reset');
  }

  setDifficulty = e => {
    console.log(e.target.value);
  };

  pickX = () => {
    if (this.state.running === true) {
      console.log(this.state);
      return;
    } else {
      this.setState({ humSymbol: 'X', comSymbol: 'O', running: true });
      console.log(this.state);
    }
  };

  pickO = () => {
    if (this.state.running === true) {
      console.log(this.state);
      return;
    } else {
      this.setState({ humSymbol: 'O', comSymbol: 'X', running: true });
      console.log(this.state);
    }
  };

  take = e => {
    const { running, human, board } = this.state;
    e.preventDefault();
    const clicked = e.target.value;
    console.log(clicked);
    if (!running) {
      return;
    }

    if (board[clicked] === 0) {
      this.set(clicked, human);
      //this.callAI();
    }
  };

  // Set squares credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  set = (index, player) => {
    console.log('set called');
    const {
      human,
      board,
      running,
      humSymbol,
      HUMVAL,
      comSymbol,
      COMVAL,
    } = this.state;
    if (!running) {
      return;
    }

    if (board[index] === 0) {
      console.log(index);
      if (player === human) {
        console.log(this.squares);
        this.squares[index].style.color = '#2222ff';
        this.squares[index].innerHTML = humSymbol;
        board[index] = HUMVAL;
      } else {
        this.squares[index].style.color = '#ff2222';
        this.squares[index].innerHTML = comSymbol;
        board[index] = COMVAL;
      }

      // Display Win Lose or Draw credit Pankajashree R https://github.com/pankaja-shree/chingu-fcc-speedrun-challenge/blob/master/frontend/tictactoe-game/scripts.js
      // if (!checkWin(game.board, player) && checkFull(game.board)) {
      // 	document.getElementById("draw").style.display = "block";
      // 	game.draw.play();
      // }

      // if (checkWin(game.board, player)){
      // 	if (player === game.human){
      // 		document.getElementById("win").style.display = "block";
      // 		game.win.play();

      // 	} else {
      // 		document.getElementById("lose").style.display = "block";
      // 		game.lose.play();
      // 	}
      // 	game.running = false;
    }
  };

  render() {
    return (
      <div className="TicTacToeGame">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div id="player">
            <p>Play as:</p>
            <button className="button" id="playerX" onClick={this.pickX}>
              X
            </button>
            <button className="button" id="playerO" onClick={this.pickO}>
              O
            </button>
          </div>

          <button
            className="square"
            id="top-left"
            tabIndex={0}
            value="0"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="top-middle"
            tabIndex={0}
            value="1"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="top-right"
            tabIndex={0}
            value="2"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="middle-left"
            tabIndex={0}
            value="3"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="middle-middle"
            tabIndex={0}
            value="4"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="middle-right"
            tabIndex={0}
            value="5"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="bottom-left"
            tabIndex={0}
            value="6"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="bottom-middle"
            tabIndex={0}
            value="7"
            onClick={this.take}
            onKeyPress={this.take}
          />
          <button
            className="square"
            id="bottom-right"
            role="button"
            tabIndex={0}
            value="8"
            onClick={this.take}
            onKeyPress={this.take}
          />

          <div
            className="button"
            id="reset"
            role="button"
            tabIndex={0}
            onClick={this.reset}
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
