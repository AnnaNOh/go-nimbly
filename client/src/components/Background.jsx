import React, { Component } from 'react';
import '../assets/stylesheets/background.css';

import Header from './Header';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);

    return (
      <div className="">
        <div className="background">
          <Header />
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
          <div className="hill-bottom" />
        </div>
      </div>
    );
  }
}

export default Background;
