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
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  _.each(result.data.allMarkdownRemark.group, (category) => {
    const numPages = Math.ceil(category.totalCount / limitPerPage);
    const categorySlug = `/category/${_.kebabCase(category.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/${i}`,
        component: path.resolve('./src/templates/category-template.js'),
        context: {
          category: category.fieldValue,
          currentPage: i,
          limit: limitPerPage,
          offset: i * limitPerPage,
          prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/${i - 1}`,
          nextPagePath: `/${categorySlug}/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      });
    }
  });
};