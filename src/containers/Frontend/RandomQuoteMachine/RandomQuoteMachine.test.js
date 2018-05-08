import React from 'react';
import { shallow } from 'enzyme';

import RandomQuoteMachine from './RandomQuoteMachine';

describe('<RandomQuoteMachine />', () => {
  it('renders without crashing', () => {
    shallow(<RandomQuoteMachine />);
  });
});
