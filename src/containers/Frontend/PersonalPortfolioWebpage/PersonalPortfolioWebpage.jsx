import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import BigPicture from './BigPicture';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './PersonalPortfolioWebpage.scss';

const PersonalPortfolioWebpage = () => (
  <div className="PersonalPortfolioWebpage">
    <PortfolioHeader />
    <BigPicture />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default PersonalPortfolioWebpage;
