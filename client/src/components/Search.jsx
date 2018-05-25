import React, { Component } from 'react';
import '../assets/stylesheets/search.css';

import { getCities, getWeather } from '../util/weather_api';
import SearchError from './SearchError';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.state = {
      input: '',
      currentWoeId: 0,
      cities: [],
      queryIsActive: false,
      error: false,
      weather: [],
      city: ''
    };
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleCity(woeId) {
    getWeather(woeId).then(res => {
      this.setState({
        city: res.data.title,
        weather: res.data.consolidated_weather
      });
    });
  }

  handleSubmit() {
    if (this.state.input === '') return null;

    // setTimeout is a temproary fix to deal with async issues with update(field)
    setTimeout(() => {
      if (this.state.currentWoeId > 0) {
        this.setState({
          error: false
        });

        if (this.props.comingFrom === 'background') {
          this.handleCity(this.state.currentWoeId);
          setTimeout(() => {
            this.props.history.push({
              pathname: `/weather/${String(this.state.currentWoeId)}`,
              state: {
                city: this.state.city,
                weather: this.state.weather
              }
            });
          }, 500);
        } else {
          this.props.handleCity(this.state.currentWoeId);
        }
      } else {
        this.setState({
          error: true
        });
      }
    }, 500);
  }

  update(field) {
    return e => {
      let currentValue = e.currentTarget.value;
      this.setState({
        [field]: e.currentTarget.value,
        queryIsActive: true
      });

      if (currentValue.length > 3) {
        getCities(currentValue).then(res => {
          let cities = [];
          for (let i = 0; i < 8 && i < res.data.length; i++) {
            cities.push(res.data[i].title);
          }
          let currentWoeId = cities[0] ? res.data[0].woeid : 0;
          this.setState({
            cities,
            currentWoeId
          });
        });
        // clear the cities and currentWoeId if no match
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
    return (
      <div
        id="weatherForm"
        className={'search-' + this.props.classTag}
        onSubmit={this.handleSubmit}
      >
        <div className={'search-adaptive-' + this.props.classTag}>
          <input
            className={'search-text-' + this.props.classTag}
            type="text"
            placeholder="See the weather in ..."
            value={this.state.input}
            onChange={this.update('input')}
            onKeyPress={this.onKeyPress}
          />
          <input
            className={'search-button-' + this.props.classTag}
            type="submit"
            onClick={this.handleSubmit}
          />
        </div>
        <SearchError error={this.state.error} />
      </div>
    );
  }
}

export default Search;
