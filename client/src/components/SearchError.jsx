import React, { Component } from 'react';
import '../assets/stylesheets/searchError.css';

class SearchError extends Component {
  render() {
    if (this.props.error) {
      return <div className="error">Please enter a real city.</div>;
    } else {
      return <div />;
    }
  }
}

export default SearchError;
