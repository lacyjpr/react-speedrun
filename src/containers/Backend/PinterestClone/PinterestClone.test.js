import React from 'react';
import { shallow } from 'enzyme';

import PinterestClone from './PinterestClone';

describe('<PinterestClone />', () => {
  it('renders without crashing', () => {
    shallow(<PinterestClone />);
  });
});
