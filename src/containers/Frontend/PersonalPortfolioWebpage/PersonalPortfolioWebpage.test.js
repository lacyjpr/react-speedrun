import React from 'react';
import { shallow } from 'enzyme';

import PersonalPortfolioWebpage from './PersonalPortfolioWebpage';

describe('<PersonalPortfolioWebpage />', () => {
  it('renders without crashing', () => {
    shallow(<PersonalPortfolioWebpage />);
  });
});
