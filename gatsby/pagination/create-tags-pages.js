'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { limitPerPage } = siteConfig;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { in: ["post", "project"] }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (tag) => {
    const numPages = Math.ceil(tag.totalCount / limitPerPage);
    const tagSlug = `/tag/${_.kebabCase(tag.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/${i}`,
        component: path.resolve('./src/templates/tag-template.js'),
        context: {
          tag: tag.fieldValue,
          currentPage: i,
          limit: limitPerPage,
          offset: i * limitPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/${i - 1}`,
          nextPagePath: `${tagSlug}/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      });
    }
  });
};