import React, { Component } from 'react';
import './SimonGame.scss';

class SimonGame extends Component {
  render() {
    return (
      <div className="SimonGame__container">
        <div className="SimonGame__button-row">
          <div
            className="SimonGame__btn SimonGame__top-left notouch unclickable"
            id="red"
          />
          <div
            className="SimonGame__btn SimonGame__top-right notouch unclickable"
            id="blue"
          />
        </div>
        <div className="SimonGame__button-row">
          <div
            className="SimonGame__btn SimonGame__bottom-left notouch unclickable"
            id="green"
          />
          <div
            className="button SimonGame__btn SimonGame__bottom-right notouch unclickable"
            id="yellow"
          />
        </div>

        <div className="innerCircle">
          <div className="brand">
            Simon<span className="small">®</span>
          </div>

          <div className="wrap">
            <div className="col1">
              <div id="display">--</div>
              <div className="label1">Count</div>
            </div>
            <div className="col1">
              <div className=" btn-round" id="start" />
              <div className="label2">Start</div>
            </div>
            <div className="col1">
              <div id="led" />
              <div className=" btn-round" id="strict" />
              <div className="label3">Strict</div>
            </div>
          </div>

          <div className="wrap2">
            <div className="col2">
              <div className="btn-round" id="reset" />
              <div className="label4">Reset</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimonGame;
