import React from 'react';
import { shallow } from 'enzyme';

import TributePage from './TributePage';

describe('<TributePage />', () => {
  it('renders without crashing', () => {
    shallow(<TributePage />);
  });
});
