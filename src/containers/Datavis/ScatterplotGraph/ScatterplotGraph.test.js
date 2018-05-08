import React from 'react';
import { shallow } from 'enzyme';

import ScatterplotGraph from './ScatterplotGraph';

describe('<ScatterplotGraph />', () => {
  it('renders without crashing', () => {
    shallow(<ScatterplotGraph />);
  });
});
