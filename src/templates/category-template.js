import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const CategoryTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage} - ${siteTitle}` : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={category}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $limit: Int!, $offset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $limit,
        skip: $offset,
        filter: { frontmatter: { category: { eq: $category }, template: { in: ["post", "project"] }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          id
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            description
            category
            title
            template
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
