import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';

import Background from './components/Background';
import WeatherCarousel from './components/WeatherCarousel';

class App extends Component {
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
