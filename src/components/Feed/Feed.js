import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';
import styles from './Feed.module.scss';

function getListLink(edge) {

  if (edge.node.frontmatter.template === "post")
    return '/posts';
  else if (edge.node.frontmatter.template === 'project')
    return '/projects';
  return '#';

}

function RenderFeed(feed) {

  const edge = feed.edge;
  if (edge.node.frontmatter.template === "post") {

    // render
    return (
      <div className={styles['feed__item']}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span>|</span>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
          <span className={styles['feed__item-meta-divider']} />
          <span>|</span>
          <span className={styles['feed__item-meta-divider']} />
          <span>
           <Link to={getListLink(edge)} className={styles['feed__item-meta-template-link']}>{edge.node.frontmatter.template}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    );

  } else if (edge.node.frontmatter.template === 'project') {

    // component image
    let projectImg = edge.node.frontmatter.image1;
    let description = "";
    if (projectImg !== null && projectImg.trim() !== "") {
      description = <Link className={styles['feed__item-readmore-project']} to={edge.node.fields.slug}>
        <img alt={edge.node.frontmatter.title} src={withPrefix(projectImg)} />
      </Link>;
    } else {
      description = <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>;
    }

    // render
    return (
      <div className={styles['feed__item']}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span>|</span>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
          <span className={styles['feed__item-meta-divider']} />
          <span>|</span>
          <span className={styles['feed__item-meta-divider']} />
          <span>
            <Link to={getListLink(edge)} className={styles['feed__item-meta-template-link']}>{edge.node.frontmatter.template}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        {description}
      </div>
    );

  }

}

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge, index) => (
      <RenderFeed edge={edge} key={index} />
    ))}
  </div>
);

export default Feed;
