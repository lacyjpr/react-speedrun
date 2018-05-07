import React from 'react';
import { shallow } from 'enzyme';

import RecipeBox from './RecipeBox';

describe('<RecipeBox />', () => {
  it('renders without crashing', () => {
    shallow(<RecipeBox />);
  });
});
