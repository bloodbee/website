// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Sharing from './Sharing';

describe('Sharing', () => {
  const props = {
    sharing: [
      {
        slug: '/projects/web-agency-specialized-in-chatbot-creation--the-bot-agency',
        path: '/#0/'
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Sharing {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
