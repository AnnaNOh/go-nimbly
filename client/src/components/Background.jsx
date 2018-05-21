import React, { Component } from 'react';
import '../assets/stylesheets/background.css';

import { getCities } from '../util/weather_api';

import Header from './Header';

class Background extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: '',
      currentWoeId: 0,
      cities: [],
      queryIsActive: false
    };
  }

  handleSubmit() {
    if (this.state.input === '') return null;
    console.log('input ', this.state.input);

    if (this.state.currentWoeId > 0) {
      this.props.history.push(`/weather/${String(this.state.currentWoeId)}`);
    } else {
      this.setState({
        error: 'Not an eligible city'
      });
    }
  }

  update(field) {
    return e => {
      let currentValue = e.currentTarget.value;
      this.setState({
        [field]: e.currentTarget.value,
        queryIsActive: true
      });

      if (
        currentValue.length > 3 &&
        currentValue[currentValue.length] !== ' ' &&
        this.state.queryIsActive
      ) {
        getCities(currentValue).then(res => {
          let cities = [];
          for (let i = 0; i < 8 && i < res.data.length; i++) {
            cities.push(res.data[i].title);
          }
          this.setState({
            cities
          });

          // only set current city if there is a match
          if (res.data[0]) {
            this.setState({
              currentWoeId: res.data[0].woeid
            });
          }
        });
      } else {
        if (this.state.currentWoeId !== 0) {
          this.setState({
            cities: [],
            currentWoeId: 0
          });
        }
      }
    };
  }

  render() {
    console.log(this.state);
    // console.log(this.props);

    return (
      <div className="">
        <Header />
        <div className="background">
          <div className="sky" />
          <div className="sun-cover">
            <div className="sun-movement sun-color " />
          </div>
          <section className="hill-top">
            <svg
              id="hilltop"
              data-name="hilltop"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1416.99 300.01"
            >
              <defs />
              <title>hilltop</title>
              <path
                className="hill"
                d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              />
            </svg>
          </section>
          <div className="hill-bottom">
            <h1 className="title">go weather</h1>
            <input
              className="search-text"
              type="text"
              placeholder="See the weather in ..."
              value={this.state.input}
              onChange={this.update('input')}
            />
            <input
              className="search-button"
              type="submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
