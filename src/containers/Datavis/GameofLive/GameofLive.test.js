import React from 'react';
import { shallow } from 'enzyme';

import GameofLive from './GameofLive';

describe('<GameofLive />', () => {
  it('renders without crashing', () => {
    shallow(<GameofLive />);
  });
});
