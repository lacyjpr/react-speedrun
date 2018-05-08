import React from 'react';
import { shallow } from 'enzyme';

import RequestHeaderParser from './RequestHeaderParser';

describe('<RequestHeaderParser />', () => {
  it('renders without crashing', () => {
    shallow(<RequestHeaderParser />);
  });
});
