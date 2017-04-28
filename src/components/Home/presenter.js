import React, { Component } from 'react';

import Card from '../Card';

class Home extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  renderCard(topic) {
    return <Card topic={topic} />;
  }

  render() {
    return (
      <div className="col-md-9 content">
        <div className="portfolio-wrapper">
          {
            this.props.topics.map((topic) => {
              return this.renderCard(topic)
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;
