import React, { Component } from 'react';
import './PomodoroClock.scss';

class PomodoroClock extends Component {
  constructor() {
    super();

    this.state = {
      breakTime: 5,
      workTime: 25,
      timerState: '',
      counter: null,
    };
  }

  breakPlus = () => {
    this.setState({ breakTime: this.state.breakTime + 1 });
  };

  breakMinus = () => {
    if (this.state.breakTime >= 1) {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }
  };

  workPlus = () => {
    this.setState({ workTime: this.state.workTime + 1 });
  };

  workMinus = () => {
    if (this.state.workTime >= 1) {
      this.setState({ workTime: this.state.workTime - 1 });
    }
  };

  render() {
    const { breakTime, workTime, timerState, counter } = this.state;
    return (
      <div className="PomodoroClock">
        <div className="row">
          <div className="timer">
            <div className="title">
              <h1>Pomodoro Clock</h1>
            </div>
            <div className="row">
              <div className="col-xs-4 break">
                <p className="text-center">Break</p>
                <button className="breakMinus" onClick={this.breakMinus}>
                  -
                </button>
                <span className="breakTime">{breakTime}</span>
                <button className="breakPlus" onClick={this.breakPlus}>
                  +
                </button>
              </div>
              <div className="col-xs-4 work">
                <p className="text-center">Work</p>
                <button className="workMinus" onClick={this.workMinus}>
                  -
                </button>
                <span className="workTime">{workTime}</span>
                <button className="workPlus" onClick={this.workPlus}>
                  +
                </button>
              </div>
            </div>

            <div className="row">
              <div className="start">Start</div>
            </div>

            <div className="clock">
              <div className="progress" />
              <div className="breakTimer" />
              <div className="getToWork hidden">Work!</div>
              <div className="takeABreak hidden">Break Time!</div>
              <div className="content">25:00</div>
            </div>

            <div className="row">
              <div className="reset">Reset</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PomodoroClock;
