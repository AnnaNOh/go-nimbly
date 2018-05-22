import React, { Component } from 'react';
import '../assets/stylesheets/weatherToday.css';

import sn from '../assets/gifs/sn-1.gif';
import sl from '../assets/gifs/sl-1.gif';
import h from '../assets/gifs/h-1.gif';
import t from '../assets/gifs/t-1.gif';
import hr from '../assets/gifs/hr-1.gif';
import lr from '../assets/gifs/lr-1.gif';
import s from '../assets/gifs/s-1.gif';
import hc from '../assets/gifs/hc-1.gif';
import lc from '../assets/gifs/lc-1.gif';
import c from '../assets/gifs/c-1.gif';

class WeatherGif extends Component {
  render() {
    let weather = this.props.weather;
    if (weather === 'lc') {
      return <img className="weather-gif" alt="lc" src={lc} />;
    } else if (weather === 'sn') {
      return <img className="weather-gif" alt="sn" src={sn} />;
    } else if (weather === 'sl') {
      return <img className="weather-gif" alt="sl" src={sl} />;
    } else if (weather === 'h') {
      return <img className="weather-gif" alt="h" src={h} />;
    } else if (weather === 't') {
      return <img className="weather-gif" alt="t" src={t} />;
    } else if (weather === 'hr') {
      return <img className="weather-gif" alt="hr" src={hr} />;
    } else if (weather === 'lr') {
      return <img className="weather-gif" alt="lr" src={lr} />;
    } else if (weather === 's') {
      return <img className="weather-gif" alt="s" src={s} />;
    } else if (weather === 'hc') {
      return <img className="weather-gif" alt="hc" src={hc} />;
    } else if (weather === 'c') {
      return <img className="weather-gif" alt="c" src={c} />;
    }
  }
}

export default WeatherGif;
