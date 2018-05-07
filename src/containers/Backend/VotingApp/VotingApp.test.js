import React from 'react';
import { shallow } from 'enzyme';

import VotingApp from './VotingApp';

describe('<VotingApp />', () => {
  it('renders without crashing', () => {
    shallow(<VotingApp />);
  });
});
