'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { limitPerPage } = siteConfig;
  const numProjects = Math.ceil(result.data.allMarkdownRemark.totalCount / limitPerPage);

  for (let i = 0; i < numProjects; i += 1) {
    createPage({
      path: i === 0 ? '/projects' : `/projects/${i}`,
      component: path.resolve('./src/templates/projects-list-template.js'),
      context: {
        currentPage: i,
        limit: limitPerPage,
        offset: i * limitPerPage,
        prevPagePath: i <= 1 ? '/projects' : `/projects/${i - 1}`,
        nextPagePath: `/projects/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numProjects - 1
      }
    });
  }
};
