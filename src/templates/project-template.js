import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project';

const ProjectTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    url: url
  } = data.site.siteMetadata;

  const {
    title: projectTitle,
    description: projectDescription
  } = data.markdownRemark.frontmatter;

  const metaDescription = projectDescription !== null ? projectDescription : siteSubtitle;
  return (
    <Layout title={`${projectTitle} | ${siteTitle}`} description={metaDescription}>
      <Project project={data.markdownRemark} url={url}/>
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        template
        slug
        image1
        customer
        month
        year
      }
    }
  }
`;

export default ProjectTemplate;
