import React, { Component } from 'react';
import '../assets/stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className="header">
        <div className="header-name">anna oh</div>
        <div className="header-logo">ao</div>
      </div>
    );
  }
}

export default Header;
