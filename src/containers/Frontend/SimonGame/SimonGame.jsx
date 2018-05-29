import React, { Component } from 'react';
import './SimonGame.scss';

class SimonGame extends Component {
  render() {
    return (
      <div className="SimonGame__container">
        <div className="SimonGame__button-row">
          <button
            className="SimonGame__btn SimonGame__top-left SimonGame__notouch SimonGame__unclickable"
            id="red"
          />
          <button
            className="SimonGame__btn SimonGame__top-right SimonGame__notouch SimonGame__unclickable"
            id="blue"
          />
        </div>
        <div className="SimonGame__button-row">
          <button
            className="SimonGame__btn SimonGame__bottom-left SimonGame__notouch SimonGame__unclickable"
            id="green"
          />
          <button
            className="button SimonGame__btn SimonGame__bottom-right notouch SimonGame__unclickable"
            id="yellow"
          />
        </div>

        <div className="SimonGame__innerCircle">
          <div className="SimonGame__brand">
            Simon<span className="SimonGame__small">®</span>
          </div>

          <div className="SimonGame__wrap">
            <div className="SimonGame__col1">
              <div className="SimonGame__display">--</div>
              <div className="SimonGame__label1">Count</div>
            </div>
            <div className="SimonGame__col1">
              <div className="SimonGame__btn-round SimonGame__start" />
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
              <div className="SimonGame__label4">Reset</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimonGame;
