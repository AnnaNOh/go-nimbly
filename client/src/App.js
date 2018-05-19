import React, { Component } from 'react';
import './App.css';

import { getCities } from './util/location_util';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: '',
      cities: []
    };
  }

  handleSubmit() {
    if (this.state.input === '') return null;

    getCities(this.state.input).then(res => {
      let cities = [];
      res.forEach(city => {
        cities.push(city.title);
      });
      this.setState({
        [cities]: cities
      });
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="App">
        <h1>AO</h1>
        <h1>ANNA OH</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.update('input')}
        />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
