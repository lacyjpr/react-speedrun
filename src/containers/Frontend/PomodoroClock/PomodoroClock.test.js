import React from 'react';
import { shallow } from 'enzyme';

import PomodoroClock from './PomodoroClock';

describe('<PomodoroClock />', () => {
  it('renders without crashing', () => {
    shallow(<PomodoroClock />);
  });
});
