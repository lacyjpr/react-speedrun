import React, { Component } from 'react';
import './PomodoroClock.scss';

class PomodoroClock extends Component {
  constructor() {
    super();

    this.state = {
      breakTime: 5,
      workTime: '25:00',
      timerState: '',
      counter: '25:00',
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
    let time = this.toSeconds(this.state.workTime);
    if (time >= 1) {
      time = time - 60;
      let time2 = this.toMinutes(time);
      this.setState({ workTime: time2, counter: time2 });
    }
  };

  start = () => {
    const val = this.state.startButtonText;
    switch (val) {
      case 'Start':
        this.setState({ startButtonText: 'Pause' });
        this.setState({ timerState: 'running' });
        this.workTimer(this.state.workTime);
        break;
      case 'Pause':
        this.setState({ startButtonText: 'Start' });
        this.setState({ timerState: 'paused' });
    }
  };

  workTimer = val => {
    let time = this.toSeconds(val);
    setInterval(() => {
      time = time - 1;
      let time2 = this.toMinutes(time);
      this.setState({ counter: time2 });
    }, 1000);
  };

  toSeconds = val => {
    const arr = val.toString().split(':');
    const minutes = parseInt(arr[0], 10);
    const seconds = parseInt(arr[1], 10);
    return seconds + minutes * 60;
  };

  toMinutes = val => {
    // Convert seconds to minutes and seconds credit: http://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    const minutes = Math.floor(val / 60);
    let seconds = val - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
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
              <div className="content">{counter}</div>
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
