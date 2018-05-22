import React, { Component } from 'react';
import '../assets/stylesheets/header.css';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="header-name">anna oh</div>
          <div className="header-logo">ao</div>
        </Link>
      </div>
    );
  }
}

export default Header;
