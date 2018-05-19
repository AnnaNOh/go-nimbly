import React, { Component } from 'react';
import './assets/stylesheets/App.css';

import { getCities } from './util/weather_api';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: '',
      cities: [],
      response: ''
    };
  }

  handleSubmit() {
    if (this.state.input === '') return null;
    console.log('input ', this.state.input);

    getCities(this.state.input).then(res => {
      console.log('res ', res.data);
      let cities = [];
      res.data.forEach(city => {
        cities.push(city.title);
      });
      this.setState({
        cities
      });
      console.log(this.state.cities);
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    // console.log(getCities('london'));
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
