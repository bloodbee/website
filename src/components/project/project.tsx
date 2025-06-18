import React, { type FC } from "react";

import type { Node } from "@/types/node";
import { Button } from "@/components/button";
import { PostTags } from "@/components/post-tags";
import { PostAuthor } from "@/components/post-author";
import { PostFooter } from "@/components/post-footer";
import { PostContent } from "@/components/post-content";
import { ThemeSwitcher } from "@/components/theme-switcher";

import * as styles from "./project.module.scss";

interface ProjectProps {
  project: Node;
}

const Project: FC<ProjectProps> = ({ project }) => {
  const { html } = project;
  const { tagSlugs } = project.fields;
  const { tags, title, date, dateCreation, website, customer } = project.frontmatter;

  return (
    <div className={styles.post}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All Projects" to="/projects" />
        <ThemeSwitcher />
      </div>
      <div className={styles.content}>
        <PostContent body={html} title={title} />
      </div>
      <div className={styles.footer}>
        <PostFooter date={date} dateCreation={dateCreation} website={website} customer={customer} />
        {tags && tagSlugs && <PostTags tags={tags} tagSlugs={tagSlugs} />}
        <PostAuthor />
      </div>
    </div>
  );
};

export { Project };
