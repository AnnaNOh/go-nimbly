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
        <a href="https://github.com/AnnaNOh">GitHub</a>
        <a href="https://www.linkedin.com/in/annanoh/">LinkedIn</a>
      </div>
    );
  }
}

export default Footer;
