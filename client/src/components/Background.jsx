import React, { Component } from 'react';
import '../assets/stylesheets/background.css';

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
        <section>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1416.99 174.01"
          >
            <defs />
            <title>Untitled-4</title>
            <path
              class="cls-1"
              d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              transform="translate(0 -135.53)"
            />
          </svg>
        </section>
      </div>
    );
  }
}

export default Background;
