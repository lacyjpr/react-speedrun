import React from 'react';
import { shallow } from 'enzyme';

import RoguelikeGame from './RoguelikeGame';

describe('<RoguelikeGame />', () => {
  it('renders without crashing', () => {
    shallow(<RoguelikeGame />);
  });
});
