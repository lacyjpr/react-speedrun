import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import BigPicture from './BigPicture';

import './PersonalPortfolioWebpage.scss';

const PersonalPortfolioWebpage = () => (
  <div className="PersonalPortfolioWebpage">
    <PortfolioHeader />
    <BigPicture />
  </div>
);

export default PersonalPortfolioWebpage;
