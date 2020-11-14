// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Contact from './Author';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';

describe('Contact', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
