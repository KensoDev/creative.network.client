import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { topic } = this.props;
    return (
      <div className="card film art">
        <a href="portfolio-item.html" className="thumb">
          <img src={topic.thumbnail} alt="" title="" />
          <span className="overlay"><span className="fa fa-search"></span></span>
        </a>
        <div className="card-body">
          <h2><a href="portfolio-item.html">{ topic.title }</a></h2>
          <p>{ topic.description }</p>
          <p><a href="portfolio-item.html">Read More</a></p>
        </div>
        <div className="card-footer">
          <ul className="list-inline filters">
            <li><a href="#none">Film</a></li>
            <li><a href="#none">Art</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
