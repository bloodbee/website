// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from '../Author';
import Comments from '../Comments';
import Content from '../Content';
import Meta from '../Meta';
import Tags from '../Tags';
import Sharing from '../Sharing';
import styles from './Project.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';

type Props = {
  project: Node
};

const Project = ({ project }: Props) => {
  const { url } = useSiteMetadata();
  const { html } = project;
  const { tagSlugs, slug } = project.fields;
  const {
    customer,
    website,
    tags,
    title,
    date,
    dateCreation
  } = project.frontmatter;
  const sharingUrl = url + slug;
  const websiteUrl = website + '?utm_source=bloodbee.space&utm_medium=projects';

  return (
    <div className={styles['project']}>
      <Link className={styles['project__home-button']} to="/projects">All Projects</Link>
      <Sharing url={sharingUrl} text={title}/>

      <div className={styles['project__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['project__footer']}>
        <p className={styles['project__footer-item']}>
          Customer : {customer}
        </p>
        <p className={styles['project__footer-item']}>
          Website : <a href={websiteUrl} target="_blank">{website}</a>
        </p>
        <p className={styles['project__footer-item']}>
          Created : {new Date(dateCreation).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
        </p>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['project__comments']}>
        <Comments slug={slug} title={project.frontmatter.title} />
      </div>
    </div>
  );
};

export default Project;
