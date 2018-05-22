import React, { Component } from 'react';
import '../assets/stylesheets/search.css';

import { getCities } from '../util/weather_api';
import SearchError from './SearchError';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: '',
      currentWoeId: 0,
      cities: [],
      queryIsActive: false,
      error: false
    };
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (this.state.input === '') return null;

    if (this.state.currentWoeId > 0) {
      this.setState({
        error: false
      });
      if (this.props.comingFrom === 'background') {
        this.props.history.push(`/weather/${String(this.state.currentWoeId)}`);
      } else {
        this.props.history.push(`/weather/${String(this.state.currentWoeId)}`);
        this.props.handleCity(this.state.currentWoeId);
      }
    } else {
      this.setState({
        error: true
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
