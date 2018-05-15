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

  toggleUnit = () => {
    if (this.state.tempUnit === 'C') {
      this.setState({
        tempUnit: 'F',
        temp: this.state.tempFahrenheit,
      });
    } else {
      this.setState({
        tempUnit: 'C',
        temp: this.state.tempCelcius,
      });
    }
  };

  render() {
    return (
      <div className="LocalWeather">
        <div className="row">
          <div className="LocalWeather__weather col-xs-6 col col-xs-offset-3 col-md-4 col-md-offset-4 text-center">
            <h1>Local Weather</h1>
            {this.state.location && (
              <div>
                <img
                  src={this.state.weatherImage}
                  alt={this.state.weatherDescription}
                />
                <p className="LocalWeather__city">
                  {this.state.location.data.city}
                </p>
                <p className="LocalWeather__temp">
                  {this.state.temp} {this.state.tempUnit}
                </p>
                <p className="LocalWeather__desc">
                  {this.state.weatherDescription}
                </p>
              </div>
            )}

            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.toggleUnit}
              >
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
