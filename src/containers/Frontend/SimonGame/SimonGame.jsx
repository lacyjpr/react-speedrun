import React, { Component } from 'react';
import './SimonGame.scss';

class SimonGame extends Component {
  constructor() {
    super();

    this.state = {
      running: false,
      strict: false,
      count: 0,
      colors: ['red', 'blue', 'green', 'yellow'],
      computerArray: [],
      playerArray: [],
      display: '--',
      redActive: false,
      blueActive: false,
      greenActive: false,
      yellowActive: false,
    };

    this.red = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
    );
    this.blue = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'
    );
    this.green = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'
    );
    this.yellow = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
    );
  }

  getComputerArray = () => {
    const { colors } = this.state;
    return new Promise(resolve => {
      this.setState({ computerArray: [] });
      let array = [];
      for (let i = 0; i < 20; i++) {
        array.push(colors[Math.floor(Math.random() * 4)]);
      }
      resolve(this.setState({ computerArray: array }));
    });
  };

  // Play Computer Array
  computerPlay = () => {
    this.setState(
      {
        count: this.state.count + 1,
        display: this.state.count + 1,
      },
      this.showComputerArray()
    );
    console.log('computerPlay', this.state);
  };

  // Display computer array
  showComputerArray = () => {
    const { computerArray } = this.state;
    // Show game count &  Empty player array
    this.setState({ display: this.state.count, playerArray: [] });
    let i = 0;
    const sequence = setInterval(() => {
      let color = computerArray[i];
      this.lightSound(color);
      i++;
      console.log(i);

      if (i >= this.state.count) {
        clearInterval(sequence);
      }
    }, 700);
  };

  // Get player move & push to playerArray
  getPlay = e => {
    const { playerArray, running } = this.state;
    e.preventDefault;
    if (running) {
      const move = e.target.value;
      this.sound(move);
      let arr = playerArray;
      arr.push(move);
      this.setState({ playerArray: arr });
      this.checkPlay();
    }
  };

  checkPlay = () => {
    const { playerArray, computerArray, strict, count } = this.state;
    // Check if player input matches computer array credit: http://codepen.io/renestl/pen/ORdNKZ
    // If no match:
    if (
      playerArray[playerArray.length - 1] !==
      computerArray[playerArray.length - 1]
    ) {
      // If strict, restart
      if (strict === true) {
        this.setState({ display: '!!!' });
        this.red.play();
        this.blue.play();
        this.green.play();
        this.yellow.play();
        setTimeout(() => {
          this.startGame();
        }, 2000);
      }
      // If not strict replay computer array
      else {
        this.setState({ display: '!!!' });
        this.red.play();
        this.blue.play();
        this.green.play();
        this.yellow.play();
        setTimeout(() => {
          this.showComputerArray();
        }, 2500);
      }
    }
    // Otherwise, we have a match
    else {
      // Check for win
      if (count === 2 && playerArray.length === count) {
        this.setState({ display: 'Win', running: false });
      } else if (playerArray.length < count) {
        return;
      } else {
        this.computerPlay();
      }
    }
  };

  // Lights & sound
  lightSound = color => {
    switch (color) {
      case 'red':
        this.setState({ redActive: true });
        this.red.play();
        setTimeout(() => {
          this.setState({ redActive: false });
        }, 1000);
        break;
      case 'blue':
        this.setState({ blueActive: true });
        this.blue.play();
        setTimeout(() => {
          this.setState({ blueActive: false });
        }, 1000);
        break;
      case 'green':
        this.setState({ greenActive: true });
        this.green.play();
        setTimeout(() => {
          this.setState({ greenActive: false });
        }, 1000);
        break;
      case 'yellow':
        this.setState({ yellowActive: true });
        this.yellow.play();
        setTimeout(() => {
          this.setState({ yellowActive: false });
        }, 1000);
        break;
    }
  };

  sound = color => {
    switch (color) {
      case 'red':
        this.red.play();
        break;
      case 'blue':
        this.blue.play();
        break;
      case 'green':
        this.green.play();
        break;
      case 'yellow':
        this.yellow.play();
        break;
      default:
        break;
    }
  };

  startGame = () => {
    this.setState({ display: '--', running: true, count: 0 });
    this.getComputerArray().then(() => this.computerPlay());
  };

  reset = () => {
    this.setState({
      running: false,
      strict: false,
      count: 0,
      computerArray: [],
      playerArray: [],
      display: '--',
      redActive: false,
      blueActive: false,
      greenActive: false,
      yellowActive: false,
    });
  };

  toggleStrict = () => {
    this.setState({ strict: !this.state.strict });
    console.log(this.state);
  };

  render() {
    const {
      display,
      running,
      strict,
      redActive,
      blueActive,
      greenActive,
      yellowActive,
    } = this.state;
    return (
      <div className="SimonGame__container">
        <div className="SimonGame__button-row">
          <button
            className={
              redActive
                ? 'SimonGame__btn SimonGame__top-left active'
                : 'SimonGame__btn SimonGame__top-left'
            }
            id="red"
            value="red"
            onClick={this.getPlay}
          />
          <button
            className={
              blueActive
                ? 'SimonGame__btn SimonGame__top-right active'
                : 'SimonGame__btn SimonGame__top-right'
            }
            id="blue"
            value="blue"
            onClick={this.getPlay}
          />
        </div>
        <div className="SimonGame__button-row">
          <button
            className={
              greenActive
                ? 'SimonGame__btn SimonGame__bottom-left active'
                : 'SimonGame__btn SimonGame__bottom-left'
            }
            id="green"
            value="green"
            onClick={this.getPlay}
          />
          <button
            className={
              yellowActive
                ? 'button SimonGame__btn SimonGame__bottom-right active'
                : 'button SimonGame__btn SimonGame__bottom-right'
            }
            id="yellow"
            value="yellow"
            onClick={this.getPlay}
          />
        </div>

        <div className="SimonGame__innerCircle">
          <div className="SimonGame__brand">
            Simon<span className="SimonGame__small">®</span>
          </div>

          <div className="SimonGame__wrap">
            <div className="SimonGame__col1">
              <div className="SimonGame__display">{display}</div>
              <div className="SimonGame__label1">Count</div>
            </div>
            <div className="SimonGame__col1">
              <div
                className={
                  running
                    ? 'SimonGame__btn-round SimonGame__start SimonGame__unclickable'
                    : 'SimonGame__btn-round SimonGame__start'
                }
                role="button"
                tabIndex={0}
                onClick={this.startGame}
                onKeyPress={this.startGame}
              />
              <div className="SimonGame__label2">Start</div>
            </div>
            <div className="SimonGame__col1">
              <div
                className={strict ? 'SimonGame__led--on' : 'SimonGame__led'}
              />
              <div
                className="SimonGame__btn-round SimonGame__strict"
                role="button"
                tabIndex={0}
                onClick={this.toggleStrict}
                onKeyPress={this.toggleStrict}
              />
              <div className="SimonGame__label3">Strict</div>
            </div>
          </div>

          <div className="SimonGame__wrap2">
            <div className="SimonGame__col2">
              <div
                className="SimonGame__btn-round SimonGame__reset"
                role="button"
                tabIndex={0}
                onClick={this.reset}
                onKeyPress={this.reset}
              />
              <div className="SimonGame__label4">Reset</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimonGame;
