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
