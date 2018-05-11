import React from 'react';

import lacy from './../../../assets/portfolio/Lacy.jpg';

const About = () => (
  <div className="PersonalPortfolioWebpage__about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <h2 className="text-center">About</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-5 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1">
          <div className="thumbnail">
            <img src={lacy} className="img-responsive" alt="Lacy Photo" />
          </div>
        </div>

        <div className="col-md-5 col-md-offset-1">
          <p className="PersonalPortfolioWebpage__about-me">
            Web Developer. Focus: MERN Stack. I live in Newport, Oregon. In my
            free time, I enjoy the ocean, cycling, working on bicycles, reading,
            fly fishing and fly tying.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
