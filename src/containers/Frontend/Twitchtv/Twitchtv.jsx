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
    this.setState({
      streamersData: { ...this.state.streamersData, [streamer]: streamData },
    });
    console.log(this.state);
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
        <ul className="list-group">
          {/* Credit @Kornil https://github.com/Kornil/react-speedrun/blob/master/src/containers/twitch_app/index.jsx & @P1xt https://github.com/P1xt/speedrun-may2018-p1xt/blob/master/fcc-react-client/src/Projects/Frontend/Twitchtv/Twitchtv.js */}
          {/* {console.log(this.state.streamersData)} */}
          {this.state.streamersData &&
            //console.log(Object.entries(this.state.streamersData))
            Object.entries(this.state.streamersData)
              .sort((a, b) => (a[1].stream === null) - (b[1].stream === null))
              .map(stream => {
                // console.log(stream);
                // if (stream[1].stream !== null) {
                //   console.log(stream[1].stream.channel.logo);
                // }
                <li className="list-group-item" key={stream[1]}>
                  {stream[1].stream !== null ? (
                    (console.log(stream[1].stream.channel.logo),
                    <img alt="avatar" src={stream[1].stream.channel.logo} />)
                  ) : (
                    <img
                      alt="missing avatar"
                      src="http://via.placeholder.com/50x50"
                    />
                  )}
                </li>;
              })}
        </ul>

        {/* 
            .map(stream => {
              stream[1].stream.channel.logo !== null && (   console.log(stream[1].stream.channel.logo),
              <li className="list-group-item" key={stream[1]}>
                {stream[1].stream.channel.logo !== null ? (
                  <img alt="avatar" src={stream[1].stream.channel.logo} />
                ) : (
                  <img
                    alt="missing avatar"
                    src="http://via.placeholder.com/50x50"
                  />
                )
              </li>)
            )}
            })} */}
      </div>
    );
  }
}

export default Twitchtv;
