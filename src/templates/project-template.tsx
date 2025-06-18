import React, { type FC } from "react";

import { graphql } from "gatsby";

import { type Node } from "@/types/node";
import { Meta } from "@/components/meta";
import { Project } from "@/components/project";
import { Layout } from "@/components/layout";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

interface ProjectTemplateProps {
  data: {
    markdownRemark: Node;
  };
}

const ProjectTemplate: FC<ProjectTemplateProps> = ({
  data: { markdownRemark },
}) => (
  <Layout>
    <Project project={markdownRemark} />
  </Layout>
);

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        tags
        title
        description
        socialImage {
          publicURL
        }
        customer
        website
        dateCreation
      }
    }
  }
`;

export const Head: FC<ProjectTemplateProps> = ({ data }) => {
  const { title, description, url } = useSiteMetadata();

  const {
    frontmatter: {
      title: projectTitle,
      description: projectDescription = description || "",
      socialImage,
    },
  } = data.markdownRemark;

  const image = socialImage?.publicURL && url.concat(socialImage?.publicURL);

  return (
    <Meta
      title={`${projectTitle} - ${title}`}
      description={projectDescription}
      image={image}
    />
  );
};

export default ProjectTemplate;
