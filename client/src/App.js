import React, { Component } from 'react';
import './assets/stylesheets/App.css';

import { getCities, getWeather } from './util/weather_api';

class App extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: '',
      currentWoeId: '',
      cities: [],
      queryIsActive: false
    };
  }

  handleSubmit() {
    if (this.state.input === '') return null;
    console.log('input ', this.state.input);

    // getWeather(this.state.currentWoeId).then()
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
          } else {
            if (this.state.currentWoeId !== '') {
              this.setState({
                cities: [],
                currentWoeId: ''
              });
            }
          }
        });
      }
    };
  }

  render() {
    // console.log('get cities ', getCities('san'));
    // console.log('weather test of san fran ', getWeather('2487956'));
    console.log(this.state);
    return (
      <div className="App">
        <h1>AO</h1>
        <h1>ANNA OH</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.input}
          onChange={this.update('input')}
        />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
