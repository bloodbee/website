import { type CreatePagesArgs } from "gatsby";

import { type Edge } from "../../../src/types/edge";

interface ProjectsQueryResult {
  allMarkdownRemark: {
    edges?: Array<Edge>;
  };
}

const projectsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<ProjectsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true }, template: { eq: "project" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark;
};

export { projectsQuery };
