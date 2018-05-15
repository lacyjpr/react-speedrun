import React, { Component } from 'react';
import axios from 'axios';

import './LocalWeather.scss';

class LocalWeather extends Component {
  state = {};

  componentDidMount() {
    this.getlocation();
  }

  getlocation = async () => {
    const location = await axios.get('https://api.ipdata.co');
    this.setState({ location });
    this.getWeather();
  };

  getWeather = async () => {
    const LAT = this.state.location.data.latitude;
    const LON = this.state.location.data.longitude;
    const weather = await axios.get(
      `https://fcc-weather-api.glitch.me/api/current?lat=${LAT}&lon=${LON}`
    );
    console.log(weather);
    this.setState({
      weatherImage: weather.data.weather[0].icon,
      weatherDescription: weather.data.weather[0].description,
      tempUnit: 'C',
      tempCelcius: weather.data.main.temp,
      tempFahrenheit: Math.round(weather.data.main.temp * 9 / 5 + 32),
      temp: weather.data.main.temp,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="LocalWeather">
        <div className="row">
          <div
            className="col-xs-6 col col-xs-offset-3 col-md-4 col-md-offset-4 text-center"
            id="weather"
          >
            <h1>Local Weather</h1>
            {this.state.location && (
              <div>
                <p id="city">{this.state.location.data.city}</p>
                <p id="tempCel">26</p>
                <p id="tempFah">70</p>
                <p id="desc">hot</p>
                <div id="icon" />
              </div>
            )}

            <div>
              <button type="button" className="btn btn-secondary" id="toggle">
                C/F
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocalWeather;
