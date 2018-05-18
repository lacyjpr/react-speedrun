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
          </div>
        </div>
        {/* <ul className="list-group"> */}
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
              return (
                <div
                  className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 Twitchtv__stream"
                  key={stream[0]}
                >
                  {stream[1].stream !== null ? (
                    // (console.log(stream[1].stream.channel.logo),
                    <img
                      alt="avatar"
                      src={stream[1].stream.channel.logo}
                      width={50}
                      height={50}
                    />
                  ) : (
                    //)
                    <img
                      alt="missing avatar"
                      src="https://via.placeholder.com/50x50"
                    />
                  )}
                  <span className="Twitchtv__stream-name">{stream[0]}</span>
                  {stream[1].stream &&
                  stream[1].stream.channel.game !== null ? (
                    <span>
                      <a href={stream[1].stream.channel.url} target="_blank">
                        &nbsp; {stream[1].stream.channel.status} &nbsp;
                      </a>
                      <span className="Twitchtv__viewers">
                        {stream[1].stream.viewers}
                      </span>
                    </span>
                  ) : (
                    <span> Offline </span>
                  )}
                </div>
              );
            })}
        {/* </ul> */}
      </div>
    );
  }
}

export default Twitchtv;
