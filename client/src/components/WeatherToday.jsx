import React, { Component } from 'react';
import '../assets/stylesheets/weatherToday.css';
import WeatherGif from './WeatherGif';
import Loading from './Loading';

class WeatherToday extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);

    if (this.props.city.length <= 0) {
      return <div />;
    } else {
      let weather = this.props.weather;
      return (
        <div className="weather-card today">
          <WeatherGif weather={weather.weather_state_abbr} />

          <div className="weather-report">
            <div className="weather-report-left">
              <h3 className="weather-report-date">Today</h3>
              <h3 className="weather-report-status">
                {weather.weather_state_name}
              </h3>
            </div>
            <div className="weather-report-right">
              <h3 className="weather-report-degree max">
                {Math.round(weather.max_temp * 9 / 5 + 32)}&deg;F
              </h3>
              <h3 className="weather-report-degree min">
                {Math.round(weather.min_temp * 9 / 5 + 32)}&deg;F
              </h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherToday;
