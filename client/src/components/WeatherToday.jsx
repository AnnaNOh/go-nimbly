import React, { Component } from 'react';
import '../assets/stylesheets/weatherToday.css';
import WeatherGif from './WeatherGif';

import lc1 from '../assets/gifs/lc-1.gif';

class WeatherToday extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);

    if (this.props.city.length <= 0) {
      return (
        <div>
          <h1>Looking Outside For You</h1>
        </div>
      );
    } else {
      let weather = this.props.weather[0];
      return (
        <div className="weather-card today">
          <h2 className="weather-city">{this.props.city}</h2>
          <WeatherGif weather={weather.weather_state_abbr} />
          <div className="weather-report">
            <div className="weather-report-left">
              <h3 className="weather-report-date">RIGHT NOW</h3>
              <h3 className="weather-report-status">
                {String(weather.weather_state_name).toUpperCase()}
              </h3>
            </div>
            <div className="weather-report-right">
              <h3 className="weather-report-degree">
                {Math.round(weather.max_temp)}
              </h3>
              <h3 className="weather-report-degree">
                {Math.round(weather.min_temp)}
              </h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherToday;
