import React from 'react';
import { shallow } from 'enzyme';

import HeatMap from './HeatMap';

describe('<HeatMap />', () => {
  it('renders without crashing', () => {
    shallow(<HeatMap />);
  });
});
