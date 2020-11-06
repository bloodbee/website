// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from '../Author';
import Comments from '../Comments';
import Content from '../Content';
import Meta from '../Meta';
import Sharing from '../Sharing';
import Tags from '../Tags';
import styles from './Project.module.scss';
import type { Node } from '../../types';

type Props = {
  project: Node
};

const Project = ({ project, url }: Props) => {
  const { html } = project;
  const { tagSlugs, slug } = project.fields;
  const { customer, website, month, year, tags, title, date } = project.frontmatter;
  const urlProject = url + slug;
  const websiteUrl = website + '?utm_source=bloodbee.space&utm_medium=projects';

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
          Website : <a href={websiteUrl} target="_blank">{website}</a>
        </p>
        <p className={styles['project__footer-item']}>
          Created {month} {year}
        </p>
        <p className={styles['project__footer-item']}>
          Published {moment(date).format('D MMM YYYY')}
        </p>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['project__comments']}>
        <Comments itemSlug={slug} itemTitle={project.frontmatter.title} />
      </div>

    </div>
  );
};

export default Project;
