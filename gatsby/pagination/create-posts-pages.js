'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { limitPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / limitPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/posts' : `/posts/${i}`,
      component: path.resolve('./src/templates/posts-list-template.js'),
      context: {
        currentPage: i,
        limit: limitPerPage,
        offset: i * limitPerPage,
        prevPagePath: i <= 1 ? '/posts' : `/posts/${i - 1}`,
        nextPagePath: `/posts/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};