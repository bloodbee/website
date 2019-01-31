import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

import Author from '../Author';
import Content from '../Content';
import Tags from '../Tags';

import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/posts">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <p className={styles['post__footer-item']}>
          Published {moment(date).format('D MMM YYYY')}
        </p>
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

    </div>
  );
};

export default Post;
