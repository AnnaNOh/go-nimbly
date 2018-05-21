import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { getCities, getWeather } from '../util/weather_api';

import WeatherToday from './WeatherToday';
// import WeatherFuture from './components/WeatherFuture';

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
    console.log('woeId ', woeId);
    getWeather(woeId).then(res => {
      this.setState({
        city: res.data.title,
        weather: res.data.consolidated_weather
      });
    });
  }

  render() {
    console.log(this.state);
    // console.log('props ', this.props);
    return (
      <div className="">
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={2}
          >
            <Slider className="slider">
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
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
