import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/App.css';

import { getCities, getWeather } from './util/weather_api';

import Background from './components/Background';
import Header from './components/Header';
import Loading from './components/Loading';
import WeatherCarousel from './components/WeatherCarousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Background} />
            <Route exact path="/weather/:woeId" component={WeatherCarousel} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
