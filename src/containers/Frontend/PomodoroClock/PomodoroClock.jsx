import React, { Component } from 'react';
import './PomodoroClock.scss';

class PomodoroClock extends Component {
  constructor() {
    super();

    this.state = {
      breakTime: '5:00',
      workTime: '25:00',
      timerState: '',
      counter: '25:00',
      startButtonText: 'Start',
    };
  }

  // Increment break time
  breakPlus = () => {
    let time = this.toSeconds(this.state.breakTime);
    if (time >= 0) {
      time = time + 60;
      time = this.toMinutes(time);
      this.setState({ breakTime: time });
    }
  };

  // Decrement break time
  breakMinus = () => {
    if (this.state.breakTime >= 1) {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }
  };

  // Increment work time
  workPlus = () => {
    let time = this.toSeconds(this.state.workTime);
    if (time >= 0) {
      time = time + 60;
      time = this.toMinutes(time);
      this.setState({ workTime: time, counter: time });
    }
  };

  // Decrement work time
  workMinus = () => {
    let time = this.toSeconds(this.state.workTime);
    if (time >= 120) {
      time = time - 60;
      time = this.toMinutes(time);
      this.setState({ workTime: time, counter: time });
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
    let clock = setInterval(() => {
      time = time - 1;
      if (time <= 0) {
        clearInterval(clock);
        this.breakTimer(this.state.breakTime);
      }
      let time2 = this.toMinutes(time);
      this.setState({ counter: time2 });
    }, 1000);
  };

  breakTimer = val => {
    let time = this.toSeconds(val);
    let clock = setInterval(() => {
      time = time - 1;
      if (time <= 0) {
        clearInterval(clock);
        this.workTimer(this.state.workTime);
      }
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
