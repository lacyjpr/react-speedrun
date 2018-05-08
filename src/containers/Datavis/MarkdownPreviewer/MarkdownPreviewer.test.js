import React from 'react';
import { shallow } from 'enzyme';

import MarkdownPreviewer from './MarkdownPreviewer';

describe('<MarkdownPreviewer />', () => {
  it('renders without crashing', () => {
    shallow(<MarkdownPreviewer />);
  });
});
