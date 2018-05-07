import React from 'react';
import { shallow } from 'enzyme';

import ImageSearch from './ImageSearch';

describe('<ImageSearch />', () => {
  it('renders without crashing', () => {
    shallow(<ImageSearch />);
  });
});
