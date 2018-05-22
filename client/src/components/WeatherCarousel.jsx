import React, { Component } from 'react';
import Carousel from './Carousel';

import { getWeather } from '../util/weather_api';

import Header from './Header';
import Search from './Search';
import WeatherToday from './WeatherToday';
import WeatherFuture from './WeatherFuture';
import Footer from './Footer';

import '../assets/stylesheets/weather.css';

class WeatherCarousel extends Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.state = {
      city: '',
      weather: []
    };
  }
  handleCity(woeId) {
    getWeather(woeId).then(res => {
      this.setState({
        city: res.data.title,
        weather: res.data.consolidated_weather
      });
    });
    console.log('weather ', this.state);
  }

  componentDidMount() {
    let woeId = Number(this.props.location.pathname.slice(9));
    getWeather(woeId).then(res => {
      this.setState({
        city: res.data.title,
        weather: res.data.consolidated_weather
      });
    });
  }

  render() {
    // console.log(this.state);
    // console.log('props ', this.props);
    let state = this.state;
    return (
      <div className="weather-carousel">
        <Header />
        <div className="nav-bar-displacer" />
        <div className="search-holder">
          <Search
            classTag="weather"
            history={this.props.history}
            handleCity={this.handleCity}
          />
        </div>
        <h3 className="weather-city">{this.state.city}</h3>
        <Carousel weather={state.weather} city={state.city} />
        <Footer />
      </div>
    );
  }
}

export default WeatherCarousel;
