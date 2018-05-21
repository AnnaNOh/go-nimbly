import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { getWeather } from '../util/weather_api';

import Header from './Header';
import WeatherToday from './WeatherToday';
import WeatherFuture from './WeatherFuture';

import '../assets/stylesheets/weather.css';

class WeatherCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: []
    };
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
      <div className="">
        <Header />
        <div className="carousel-holder">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
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
            <ButtonBack className="carousel-nav left">
              <i className="fas fa-caret-left" />
            </ButtonBack>
            <ButtonNext className="carousel-nav right">
              <i className="fas fa-caret-right" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    );
  }
}

export default WeatherCarousel;
