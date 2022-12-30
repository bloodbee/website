import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

import { Author } from "../Author";
import { Comments } from "../Comments";
import { Content } from "../Content";
import { Meta } from "./Meta";
import { Tags } from "../Tags";
import { Sharing } from "../Sharing";

import { useSiteMetadata } from '../../hooks';

import * as styles from "./Project.module.scss";

interface Props {
  project: Node;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  const { url } = useSiteMetadata();
  const { html } = project;
  const { tagSlugs, slug } = project.fields;
  const { tags, title, date } = project.frontmatter;

  const sharingUrl = url + slug;

  return (
    <div className={styles.project}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All Projects" to="/projects" />
        <ThemeSwitcher />
      </div>
      <Sharing url={sharingUrl} text={title}/>

      <div className={styles.content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.footer}>
        <Meta project={project} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={project.frontmatter.title} />
      </div>
    </div>
  );
};

export default Project;
