import React from 'react';
import { shallow } from 'enzyme';

import TicTacToeGame from './TicTacToeGame';

describe('<TicTacToeGame />', () => {
  it('renders without crashing', () => {
    shallow(<TicTacToeGame />);
  });
});
