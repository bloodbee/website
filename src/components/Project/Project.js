import React from 'react';
import Disqus from 'disqus-react';
import { Link } from 'gatsby';
import Content from '../Content';
import Author from '../Author';
import Meta from '../Meta';
import Tags from '../Tags';
import Sharing from '../Sharing';

import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import animate from '../../assets/scss/animate.scss';

const siteConfig = require('../../../config.js');

let styleClass = classNames.bind(null, styles);
let animateClass = classNames.bind(null, animate);

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

      <div>
        Customer : {customer}
      </div>
      <div>
        Website : {website}
      </div>
      <div>
        {month} {year}
      </div>

      <div className={styles['project__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>

    </div>
  );
};

export default Project;
