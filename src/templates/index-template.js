// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
};

const IndexTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMarkdownRemark;
  const pageTitle = siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "page" }, title: { eq: "Home" } } },
    ){
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
