import React from 'react';
import Slider from 'react-slick';

import WeatherToday from './WeatherToday';
import WeatherFuture from './WeatherFuture';
import Loading from './Loading';

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1150,
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
