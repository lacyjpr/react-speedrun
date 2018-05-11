import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import BigPicture from './BigPicture';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import './PersonalPortfolioWebpage.scss';

const PersonalPortfolioWebpage = () => (
  <div className="PersonalPortfolioWebpage">
    <PortfolioHeader />
    <BigPicture />
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default PersonalPortfolioWebpage;
