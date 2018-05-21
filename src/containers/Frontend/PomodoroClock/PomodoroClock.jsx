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
      startButtonText: 'Start',
    };
  }

  // Increment break time
  breakPlus = () => {
    this.setState({ breakTime: this.state.breakTime + 1 });
  };

  // Decrement break time
  breakMinus = () => {
    if (this.state.breakTime >= 1) {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }
  };

  // Increment work time
  workPlus = () => {
    this.setState({ workTime: this.state.workTime + 1 });
  };

  // Decrement work time
  workMinus = () => {
    if (this.state.workTime >= 1) {
      this.setState({ workTime: this.state.workTime - 1 });
    }
  };

  start = () => {
    const val = this.state.startButtonText;
    switch (val) {
      case 'Start':
        this.setState({ startButtonText: 'Pause' });
        break;
      case 'Pause':
        this.setState({ startButtonText: 'Start' });
    }
  };

  render() {
    const {
      breakTime,
      workTime,
      startButtonText,
      timerState,
      counter,
    } = this.state;
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
              <button className="start" onClick={this.start}>
                {startButtonText}
              </button>
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
