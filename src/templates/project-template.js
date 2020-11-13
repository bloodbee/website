// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const ProjectTemplate = ({ data }: Props) => {
  console.log(data);

  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: projectTitle, description: projectDescription = '', socialImage } = frontmatter;
  const metaDescription = projectDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;

  return (
    <Layout title={`${projectTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Project project={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        categorySlug
        tagSlugs
      }
      frontmatter {
        date
        dateCreation
        description
        tags
        title
        template
        customer
        website
        category
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default ProjectTemplate;
