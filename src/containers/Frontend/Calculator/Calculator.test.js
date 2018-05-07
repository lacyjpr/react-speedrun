import React from 'react';
import { shallow } from 'enzyme';

import Calculator from './Calculator';

describe('<Calculator />', () => {
  it('renders without crashing', () => {
    shallow(<Calculator />);
  });
});
