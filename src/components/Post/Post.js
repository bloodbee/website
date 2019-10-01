import React from 'react';
import Disqus from 'disqus-react';
import { Link } from 'gatsby';
import moment from 'moment';

import Author from '../Author';
import Content from '../Content';
import Tags from '../Tags';

import Sharing from '../Sharing';

import styles from './Post.module.scss';

const siteConfig = require('../../../config.js');

const Post = ({ post, url }) => {
  const {
    tags,
    title,
    date,
    slug
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  const urlPost = url + slug;

  const disqusShortname = siteConfig.disqusShortname;
  const disqusConfig = {
      url: urlPost,
      identifier: post.id,
      title: title,
  };

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/posts">All Posts</Link>
      <Sharing url={urlPost} text={title}/>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <p className={styles['post__footer-item']}>
          Published {moment(date).format('D MMM YYYY')}
        </p>
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>

    </div>
  );
};

export default Post;
