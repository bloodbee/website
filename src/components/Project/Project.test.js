import React from 'react';
import renderer from 'react-test-renderer';
import Project from './Project';

describe('Project', () => {
  const props = {
    Project: {
      html: '<p>test</p>',
      fields: {
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test'
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Project {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
