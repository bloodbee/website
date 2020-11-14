// @flow strict
import React from 'react';
import { Link, withPrefix } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const GetListLink= (edge)  => {
  if (edge.node.frontmatter.template === 'post') {
    return '/posts';
  } else if (edge.node.frontmatter.template === 'project') {
    return '/projects';
  }
  return '/';

};

const RenderFeed = (feed) => {
  const edge = feed.edge;
  // component image
  const projectImg = edge['node']['frontmatter']['socialImage'] ? edge['node']['frontmatter']['socialImage']['publicURL'] : null;
  let description = '';
  if (projectImg) {
    description = <Link className={styles['feed__item-readmore-project']} to={edge.node.fields.slug}>
      <img alt={edge.node.frontmatter.title} src={projectImg} />
    </Link>;
  } else {
    description = <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>;
  }

  return (
    <div className={styles['feed__item']}>
      <div className={styles['feed__item-meta']}>
        <time className={styles['feed__item-meta-time']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
        { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
        </time>
        <span className={styles['feed__item-meta-divider']} />
        <span className={styles['feed__item-meta-category']}>
          <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-template-link']}>{edge.node.frontmatter.category}</Link>
        </span>
      </div>
      <h2 className={styles['feed__item-title']}>
        <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
      </h2>
      {description}
    </div>
  );

};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <RenderFeed edge={edge} key={edge.node.fields.slug} />
    ))}
  </div>
);

export default Feed;
