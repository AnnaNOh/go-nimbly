import React, { Component } from 'react';
import '../assets/stylesheets/loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return <div className="loading">Looking Outside the Window For You</div>;
  }
}

export default Loading;
