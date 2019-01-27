import React from 'react';
import renderer from 'react-test-renderer';
import Sharing from './Sharing';

describe('Sharing', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Sharing {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
