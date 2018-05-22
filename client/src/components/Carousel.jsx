import React, { Component } from 'react';
import Slider from 'react-slick';

import Loading from './Loading';
import WeatherToday from './WeatherToday';
import WeatherFuture from './WeatherFuture';

class Carousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    let props = this.props;
    if (this.props.city.length <= 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div>
          <Slider {...settings}>
            <div>
              <WeatherToday weather={props.weather[0]} city={props.city} />
            </div>
            <div>
              <WeatherFuture weather={props.weather[1]} city={props.city} />
            </div>
            <div>
              <WeatherFuture weather={props.weather[2]} city={props.city} />
            </div>
            <div>
              <WeatherFuture weather={props.weather[3]} city={props.city} />
            </div>
            <div>
              <WeatherFuture weather={props.weather[4]} city={props.city} />
            </div>
            <div>
              <WeatherFuture weather={props.weather[5]} city={props.city} />
            </div>
          </Slider>
        </div>
      );
    }
  }
}

export default Carousel;
