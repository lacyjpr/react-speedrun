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
      winner: null,
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

    this.squares = document.getElementsByClassName('square');
  }

  setDifficulty = e => {
    e.preventDefault();
    const difficulty = e.target.value;
    this.setState({ difficulty });
  };

  reset = () => {
    const { board } = this.state;
    for (var x = 0; x < 9; x++) {
      this.squares[x].innerHTML = '';
      board[x] = 0;
    }
    this.setState({
      running: false,
      humSymbol: 'X',
      comSymbol: 'O',
      winner: null,
    });
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
      this.setState(
        { humSymbol: 'O', comSymbol: 'X', running: true },
        this.callAI
      );
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
      this.set(clicked, human).then(() => this.callAI());
    }
  };

  // Set squares credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  set = (index, player) => {
    return new Promise(resolve => {
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
          resolve(
            (this.squares[index].style.color = '#2222ff'),
            (this.squares[index].innerHTML = humSymbol),
            (board[index] = HUMVAL)
          );
        } else {
          resolve(
            (this.squares[index].style.color = '#ff2222'),
            (this.squares[index].innerHTML = comSymbol),
            (board[index] = COMVAL)
          );
        }

        // Display Win Lose or Draw credit Pankajashree R https://github.com/pankaja-shree/chingu-fcc-speedrun-challenge/blob/master/frontend/tictactoe-game/scripts.js
        if (!this.checkWin(board, player) && this.checkFull(board)) {
          this.draw.play();
          this.setState({ running: false, winner: 'none' }, resolve());
        }

        if (this.checkWin(board, player)) {
          if (player === human) {
            this.setState({ winner: 'human' });
            this.win.play();
          } else {
            this.setState({ winner: 'computer' });
            this.lose.play();
          }
          this.setState({ running: false }, resolve());
        }
      }
    });
  };

  // Check for win credit KPkiller1671 https://www.youtube.com/watch?v=aWhb9dr1jNw
  checkWin = (board, player) => {
    const { human, HUMVAL, COMVAL, winMatrix } = this.state;
    const value = player === human ? HUMVAL : COMVAL;

    for (let j = 0; j < 8; j++) {
      let win = true;

      for (let k = 0; k < 3; k++) {
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
    const { difficulty, board, computer } = this.state;
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
    this.setState({ empties: [] });
    for (let n = 0; n < 9; n++) {
      if (board[n] === 0) {
        empties.push(n);
      }
    }
  };

  // Make a random move
  randomMove = () => {
    const { empties, computer } = this.state;
    this.getEmpties();
    const randomCell = empties[Math.floor(Math.random() * empties.length)];
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

    let max = -Infinity;
    let index = 0;

    // Recurse through possible moves until a terminal condition is reached
    for (let m = 0; m < 9; m++) {
      if (board[m] === 0) {
        let newBoard = board.slice();
        newBoard[m] = value;

        const moveVal = -this.miniMax(newBoard, depth + 1, !player);

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
    const { winner } = this.state;
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
          {[
            'top-left',
            'top-middle',
            'top-right',
            'middle-left',
            'middle-middle',
            'middle-right',
            'bottom-left',
            'bottom-middle',
            'bottom-right',
          ].map((x, i) => (
            <button
              className="square"
              id={x}
              tabIndex={0}
              value={i}
              onClick={this.take}
              onKeyPress={this.take}
            />
          ))}
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
                id="easy"
                defaultChecked
              />
              <label htmlFor="easy">Easy</label>
              <input
                type="radio"
                name="difficulty"
                value="medium"
                id="medium"
              />
              <label htmlFor="medium">Medium</label>
              <input type="radio" name="difficulty" value="hard" id="hard" />
              <label htmlFor="hard">Hard</label>
            </form>
          </div>
          <div className="display">
            <h1 id="win" className={winner === 'human' ? '' : 'hidden'}>
              You Win!
            </h1>
            <h1 id="lose" className={winner === 'computer' ? '' : 'hidden'}>
              You Lose!
            </h1>
            <h1 id="draw" className={winner === 'none' ? '' : 'hidden'}>
              Draw!
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToeGame;
