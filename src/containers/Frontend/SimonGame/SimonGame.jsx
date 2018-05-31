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
    let sequence = setInterval(() => {
      // Make color buttons unclickable
      this.setState({ clickAble: false });
      //let color = computerArray[i];
      //this.lightSound(color);
      i++;
      if (i >= count) {
        clearInterval(sequence);
        //playerPlay();
      }
    }, 700);
  };

  startGame = () => {
    this.setState({ display: '--', running: true, count: 0 });
    this.getComputerArray().then(() => this.computerPlay());
  };

  render() {
    const { display, running, clickAble } = this.state;
    return (
      <div className="SimonGame__container">
        <div className="SimonGame__button-row">
          <button
            className={
              clickAble
                ? 'SimonGame__btn SimonGame__top-left SimonGame__notouch'
                : 'SimonGame__btn SimonGame__top-left SimonGame__notouch SimonGame__unclickable'
            }
            id="red"
          />
          <button
            className={
              clickAble
                ? 'SimonGame__btn SimonGame__top-right SimonGame__notouch'
                : 'SimonGame__btn SimonGame__top-right SimonGame__notouch SimonGame__unclickable'
            }
            id="blue"
          />
        </div>
        <div className="SimonGame__button-row">
          <button
            className={
              clickAble
                ? 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch'
                : 'SimonGame__btn SimonGame__bottom-left SimonGame__notouch SimonGame__unclickable'
            }
            id="green"
          />
          <button
            className={
              clickAble
                ? 'button SimonGame__btn SimonGame__bottom-right notouch'
                : 'button SimonGame__btn SimonGame__bottom-right notouch SimonGame__unclickable'
            }
            id="yellow"
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
