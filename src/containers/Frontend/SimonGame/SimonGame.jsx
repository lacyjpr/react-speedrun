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
      move: '',
      display: '--',
      clickAble: true,
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
    this.setState({
      count: this.state.count + 1,
      display: this.state.count + 1,
    });
    console.log(this.state);
    this.showComputerArray();
  };

  // Display computer array
  showComputerArray = () => {
    const { computerArray, count } = this.state;
    // Show game count &  Empty player array
    this.setState({ display: this.state.count, playerArray: [] });
    // Show computer array credit http://codepen.io/renestl/pen/ORdNKZ
    let i = 0;
    const sequence = setInterval(() => {
      // Make color buttons unclickable
      this.setState({ clickAble: false });
      let color = computerArray[i];
      this.lightSound(color);
      i++;
      console.log(i);
      if (i >= count) {
        clearInterval(sequence);
        this.setState({ clickAble: true });
      }
    }, 700);
  };

  // Get player move & push to playerArray
  getPlay = e => {
    console.log(e.target.value);
    // game.move = this.id;
    // sound(game.move);
    // // Push player input to playerArray
    // game.playerArray.push(game.move);
    // checkPlay();
  };

  // Lights & sound
  lightSound = color => {
    switch (color) {
      case 'red':
        this.setState({ redActive: true });
        console.log(this.state.redActive, 'red');
        this.red.play();
        setTimeout(() => {
          this.setState({ redActive: false });
        }, 1000);
        break;
      case 'blue':
        this.setState({ blueActive: true });
        console.log(this.state.blueActive, 'blue');
        this.blue.play();
        setTimeout(() => {
          this.setState({ blueActive: false });
        }, 1000);
        break;
      case 'green':
        this.setState({ greenActive: true });
        console.log(this.state.greenActive, 'green');
        this.green.play();
        setTimeout(() => {
          this.setState({ greenActive: false });
        }, 1000);
        break;
      case 'yellow':
        this.setState({ yellowActive: true });
        console.log(this.state.yellowActive, 'yellow');
        this.yellow.play();
        setTimeout(() => {
          this.setState({ yellowActive: false });
        }, 1000);
        break;
    }
  };

  startGame = () => {
    this.setState({ display: '--', running: true, count: 0 });
    this.getComputerArray().then(() => this.computerPlay());
  };

  render() {
    const {
      display,
      running,
      clickAble,
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
              !clickAble && redActive
                ? 'SimonGame__btn SimonGame__top-left SimonGame__notouch SimonGame__unclickable active'
                : 'SimonGame__btn SimonGame__top-left SimonGame__notouch SimonGame__unclickable' +
                    clickAble && redActive
                  ? 'SimonGame__btn SimonGame__top-left SimonGame__notouch active'
                  : 'SimonGame__btn SimonGame__top-left SimonGame__notouch' +
                    clickAble
                    ? 'SimonGame__btn SimonGame__top-left SimonGame__notouch'
                    : 'SimonGame__btn SimonGame__top-left SimonGame__notouch SimonGame__unclickable'
            }
            id="red"
            value="red"
            onClick={this.getPlay}
          />
          <button
            className={
              !clickAble && blueActive
                ? 'SimonGame__btn SimonGame__top-right SimonGame__notouch SimonGame__unclickable active'
                : 'SimonGame__btn SimonGame__top-right SimonGame__notouch SimonGame__unclickable' +
                    clickAble && blueActive
                  ? 'SimonGame__btn SimonGame__top-right SimonGame__notouch active'
                  : 'SimonGame__btn SimonGame__top-right SimonGame__notouch' +
                    clickAble
                    ? 'SimonGame__btn SimonGame__top-right SimonGame__notouch'
                    : 'SimonGame__btn SimonGame__top-right SimonGame__notouch SimonGame__unclickable'
            }
            id="blue"
            value="blue"
            onClick={this.getPlay}
          />
        </div>
        <div className="SimonGame__button-row">
          <button
            className={
              !clickAble && greenActive
                ? 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch SimonGame__unclickable active'
                : 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch SimonGame__unclickable' +
                    clickAble && greenActive
                  ? 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch active'
                  : 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch' +
                    clickAble
                    ? 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch'
                    : 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch SimonGame__unclickable'
            }
            id="green"
            value="green"
            onClick={this.getPlay}
          />
          <button
            className={
              !clickAble && yellowActive
                ? 'button SimonGame__btn SimonGame__bottom-right notouch SimonGame__unclickable active'
                : 'button SimonGame__btn SimonGame__bottom-right notouch SimonGame__unclickable' +
                    clickAble && yellowActive
                  ? 'button SimonGame__btn SimonGame__bottom-right notouch active'
                  : 'button SimonGame__btn SimonGame__bottom-right notouch' +
                    clickAble
                    ? 'button SimonGame__btn SimonGame__bottom-right notouch'
                    : 'button SimonGame__btn SimonGame__bottom-right notouch SimonGame__unclickable'
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
              <div className="SimonGame__led" />
              <div className="SimonGame__btn-round SimonGame__strict" />
              <div className="SimonGame__label3">Strict</div>
            </div>
          </div>

          <div className="SimonGame__wrap2">
            <div className="SimonGame__col2">
              <div className="SimonGame__btn-round SimonGame__reset" />
              <div
                className="SimonGame__label4"
                role="button"
                tabIndex={0}
                onClick={this.reset}
                onKeyPress={this.reset}
              >
                Reset
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimonGame;
