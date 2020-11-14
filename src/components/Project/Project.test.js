// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Project from './Project';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';

describe('Project', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    project: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        categorySlug: '/test-category',
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
