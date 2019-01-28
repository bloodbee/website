import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import Author from './Author';
import Meta from './Meta';
import Tags from './Tags';
import Sharing from '../Sharing';
import styles from './Project.module.scss';

const Project = ({ project, metadata}) => {
  const {
    tags,
    title,
    date
  } = project.frontmatter;

  const { html } = project;
  const { tagSlugs } = project.fields;

  return (
    <div className={styles['project']}>
      <Link className={styles['project__home-button']} to="/projects">All Projects</Link>
      <Sharing metadata={metadata} />

      <div className={styles['project__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['project__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

    </div>
  );
};

export default Project;
