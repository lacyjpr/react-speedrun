import React from 'react';
import { shallow } from 'enzyme';

import Twitchtv from './Twitchtv';

describe('<Twitchtv />', () => {
  it('renders without crashing', () => {
    shallow(<Twitchtv />);
  });
});
