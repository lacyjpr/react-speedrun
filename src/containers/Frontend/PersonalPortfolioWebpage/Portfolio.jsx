import React from 'react';

import portfolio from './../../../assets/portfolio/Portfolio.jpg';
import optimization from './../../../assets/portfolio/Optimization.jpg';
import neighborhood from './../../../assets/portfolio/Neighborhood.jpg';
import ali from './../../../assets/portfolio/Ali.jpg';
import frogger from './../../../assets/portfolio/Frogger.jpg';
import testing from './../../../assets/portfolio/Testing.jpg';

const Portfolio = () => (
  <div className="PersonalPortfolioWebpage__portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <h2 className="text-center">Portfolio</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <a href="http://lacyjpr.github.io/portfolio/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={portfolio}
                  className="img-responsive"
                  alt="Portfolio Page"
                />
                <div className="caption text-center">
                  <p>Old Portfolio</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="https://github.com/lacyjpr/optimization/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={optimization}
                  className="img-responsive"
                  alt="Pizza Page"
                />
                <div className="caption text-center">
                  <p>Website Optimization Project</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="http://lacyjpr.github.io/neighborhood/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={neighborhood}
                  className="img-responsive"
                  alt="Coffee in Newport Map"
                />
                <div className="caption text-center">
                  <p>Coffee in Newport, OR App</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <a href="https://lacyjpr.github.io/Ali-Tribute/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={ali}
                  className="img-responsive"
                  alt="Ali over Liston"
                />
                <div className="caption text-center">
                  <p>Muhammad Ali Tribute Page</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="http://lacyjpr.github.io/arcade/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={frogger}
                  className="img-responsive"
                  alt="Frogger Clone"
                />
                <div className="caption text-center">
                  <p>Frogger Clone</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="http://lacyjpr.github.io/testing/" target="blank_">
            <div className="portfolio-item">
              <div className="thumbnail">
                <img
                  src={testing}
                  className="img-responsive"
                  alt="Jasmine Testing Page"
                />
                <div className="caption text-center">
                  <p>Jasmine Testing</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
