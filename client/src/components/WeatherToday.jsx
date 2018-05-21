import React, { Component } from 'react';
import '../assets/stylesheets/weatherToday.css';

class WeatherToday extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state);
    console.log(this.props);

    return (
      <div className="">
        <h1>hi I'm weather today</h1>
      </div>
    );
  }
}

export default WeatherToday;
