import React, { Component } from 'react';

import Card from '../Card';

class Home extends Component {
  render() {
    return (
      <div className="col-md-9 content">
        <div className="portfolio-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
