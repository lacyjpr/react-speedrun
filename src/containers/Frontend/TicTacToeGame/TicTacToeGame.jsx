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

  componentDidMount() {
    // Hide win lose draw messages
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('draw').style.display = 'none';
  }

  setDifficulty = e => {
    e.preventDefault();
    console.log(e.target.value);
    const difficulty = e.target.value;
    this.setState({ difficulty });
  };

  reset = () => {
    const { board } = this.state;
    for (var x = 0; x < 9; x++) {
      this.squares[x].innerHTML = '';
      board[x] = 0;
    }
    this.setState({ running: false, humSymbol: 'X', comSymbol: 'O' });
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('draw').style.display = 'none';
  };

  pickX = () => {
    if (this.state.running === true) {
      return;
    } else {
      this.setState({ humSymbol: 'X', comSymbol: 'O', running: true });
    }
  };

  pickO = () => {
    if (this.state.running === true) {
      return;
    } else {
      this.setState({ humSymbol: 'O', comSymbol: 'X', running: true });
    }
  };

  take = e => {
    const { running, human, board } = this.state;
    e.preventDefault();
    const clicked = e.target.value;

    if (!running) {
      return;
    }

    if (board[clicked] === 0) {
      this.set(clicked, human);
      this.callAI();
    }
  };

  // Set squares credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  set = (index, player) => {
    console.log('set called');
    console.log(this.state);
    let {
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
      if (player === human) {
        this.squares[index].style.color = '#2222ff';
        this.squares[index].innerHTML = humSymbol;
        board[index] = HUMVAL;
      } else {
        this.squares[index].style.color = '#ff2222';
        this.squares[index].innerHTML = comSymbol;
        board[index] = COMVAL;
      }

      // Display Win Lose or Draw credit Pankajashree R https://github.com/pankaja-shree/chingu-fcc-speedrun-challenge/blob/master/frontend/tictactoe-game/scripts.js
      if (!this.checkWin(board, player) && this.checkFull(board)) {
        document.getElementById('draw').style.display = 'block';
        this.draw.play();
      }

      if (this.checkWin(board, player)) {
        if (player === human) {
          document.getElementById('win').style.display = 'block';
          this.win.play();
        } else {
          document.getElementById('lose').style.display = 'block';
          this.lose.play();
        }
        running = false;
      }
    }
  };

  // Check for win credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  checkWin = (board, player) => {
    const { human, HUMVAL, COMVAL, winMatrix } = this.state;
    var value = player === human ? HUMVAL : COMVAL;

    for (var j = 0; j < 8; j++) {
      var win = true;

      for (var k = 0; k < 3; k++) {
        if (board[winMatrix[j][k]] != value) {
          win = false;
          break;
        }
      }
      if (win) {
        return true;
      }
    }

    return false;
  };

  // Check for full board credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  checkFull = board => {
    for (var l = 0; l < 9; l++) {
      if (board[l] === 0) {
        return false;
      }
    }
    return true;
  };

  // Start AI
  callAI = () => {
    console.log('callAI called');
    const { difficulty, board, computer } = this.state;
    console.log(difficulty);
    if (difficulty === 'easy') {
      this.randomMove();
      return;
    }
    if (difficulty === 'medium') {
      if (Math.random() * 100 <= 50) {
        this.miniMax(board, 0, computer);
        return;
      } else {
        this.randomMove();
        return;
      }
    } else {
      this.miniMax(board, 0, computer);
    }
  };

  // Get empty squares
  getEmpties = () => {
    let { empties, board } = this.state;
    console.log('board', board);
    this.setState({ empties: [] });
    for (var n = 0; n < 9; n++) {
      if (board[n] === 0) {
        empties.push(n);
        console.log('empties', empties);
      }
    }
  };

  // Make a random move
  randomMove = () => {
    console.log('randomMove called');
    const { empties, computer } = this.state;
    this.getEmpties();
    const randomCell = empties[Math.floor(Math.random() * empties.length)];
    console.log(randomCell);
    this.set(randomCell, computer);
  };

  // Minimax AI credit to KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  miniMax = (board, depth, player) => {
    const { human, HUMVAL, COMVAL, computer } = this.state;
    // Terminal condition
    if (this.checkWin(board, !player)) {
      return -10 + depth;
    }
    // Terminal condition
    if (this.checkFull(board)) {
      return 0;
    }

    const value = player === human ? HUMVAL : COMVAL;

    var max = -Infinity;
    var index = 0;

    // Recurse through possible moves until a terminal condition is reached
    for (var m = 0; m < 9; m++) {
      if (board[m] === 0) {
        var newBoard = board.slice();
        newBoard[m] = value;

        var moveVal = -this.miniMax(newBoard, depth + 1, !player);

        if (moveVal > max) {
          max = moveVal;
          index = m;
        }
      }
    }
    // Make the best possible move
    if (depth === 0) {
      this.set(index, computer);
    }

    return max;
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
            onKeyPress={this.reset}
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
