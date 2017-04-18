import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card film art">
        <a href="portfolio-item.html" className="thumb">
          <img src={require("../../img/sample/sintel/sample-sintel-1.jpg")} alt="" title="" />
          <span className="overlay"><span className="fa fa-search"></span></span>
        </a>
        <div className="card-body">
          <h2><a href="portfolio-item.html">Sintel at Seattle International Film Festival</a></h2>
          <p>The cinema where Sintel screens has digital 4k projection, I’m working with them getting this formatted right and delivered. Would be a real ...</p>
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
