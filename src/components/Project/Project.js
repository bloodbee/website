import React from 'react';
import Disqus from 'disqus-react';
import { Link } from 'gatsby';
import moment from 'moment';

import Content from '../Content';
import Author from '../Author';
import Tags from '../Tags';
import Sharing from '../Sharing';

import styles from './Project.module.scss';

const siteConfig = require('../../../config.js');

const Project = ({ project, url}) => {
  const {
    customer,
    website,
    month,
    year,
    tags,
    title,
    date,
    slug
  } = project.frontmatter;

  const { html } = project;
  const { tagSlugs } = project.fields;

  const urlProject = url + slug;

  const disqusShortname = siteConfig.disqusShortname;
  const disqusConfig = {
      url: urlProject,
      identifier: project.id,
      title: title,
  };

  return (
    <div className={styles['project']}>
      <Link className={styles['project__home-button']} to="/projects">All Projects</Link>
      <Sharing url={urlProject} text={title}/>

      <div className={styles['project__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['project__footer']}>
        <p className={styles['project__footer-item']}>
          Customer : {customer}
        </p>
        <p className={styles['project__footer-item']}>
          Website : {website}
        </p>
        <p className={styles['project__footer-item']}>
          Created {month} {year}
        </p>
        <p className={styles['project__footer-item']}>
          Published {moment(date).format('D MMM YYYY')}
        </p>
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>

    </div>
  );
};

export default Project;
