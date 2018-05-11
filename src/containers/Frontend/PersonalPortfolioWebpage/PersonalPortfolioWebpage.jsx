import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import BigPicture from './BigPicture';
import About from './About';

import './PersonalPortfolioWebpage.scss';

const PersonalPortfolioWebpage = () => (
  <div className="PersonalPortfolioWebpage">
    <PortfolioHeader />
    <BigPicture />
    <About />
  </div>
);

export default PersonalPortfolioWebpage;
