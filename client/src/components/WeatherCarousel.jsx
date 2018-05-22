import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
        <div className="carousel-holder">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={2}
          >
            <Slider className="slider">
              <Slide className="slider-item" index={0}>
                <WeatherToday weather={state.weather} city={state.city} />
              </Slide>
              <Slide index={1}>
                <WeatherFuture weather={state.weather} city={state.city} />
              </Slide>
            </Slider>
            <div className="dot-container">
              <Dot className="dot" disabled="true" slide={0} />
              <Dot className="dot" disabled="true" slide={1} />
            </div>
          </CarouselProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WeatherCarousel;
