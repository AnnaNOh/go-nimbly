import React, { Component } from 'react';
import '../assets/stylesheets/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className="footer">
        <div>GitHub</div>
        <div>LinkedIn</div>
      </div>
    );
  }
}

export default Footer;
