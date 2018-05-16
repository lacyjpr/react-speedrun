import React, { Component } from 'react';
import './Twitchtv.scss';

class Twitchtv extends Component {
  constructor() {
    super();
    this.state = {
      streamers: [
        'ESL_SC2',
        'OgamingSC2',
        'cretetion',
        'freecodecamp',
        'storbeck',
        'habathcx',
        'RobotCaleb',
        'noobs2ninjas',
        'brunofin',
        'comster404',
      ],
      streamersData: null,
    };
  }

  componentDidMount() {
    this.getStreams();
  }

  getStreams = async () => {
    await this.state.streamers.map(async streamer =>
      this.getStreamer(streamer)
    );
  };

  getStreamer = async streamer => {
    const response = await fetch(
      `https://wind-bow.glitch.me/twitch-api/streams/${streamer}`
    );
    const streamData = await response.json();
    console.log(streamData);
  };

  render() {
    return (
      <div className="Twitchtv">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Twitch.tv Streamers</h1>
            <button type="button" className="btn btn-default Twitchtv__all-btn">
              All
            </button>
            <button
              type="button"
              className="btn btn-default Twitchtv__online-btn"
            >
              Online
            </button>
            <button
              type="button"
              className="btn btn-default Twitchtv__offline-btn"
            >
              Offline
            </button>
          </div>
        </div>

        <div id="results" />
      </div>
    );
  }
}

export default Twitchtv;
