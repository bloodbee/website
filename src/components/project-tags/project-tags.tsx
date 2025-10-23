import React, { type FC } from "react";

import { Button } from "@/components/button";

import * as styles from "./project-tags.module.scss";

interface ProjectTagsProps {
  tags: string[];
  tagSlugs: string[];
};

const ProjectTags: FC<ProjectTagsProps> = ({ tags, tagSlugs }) => (
  <ul className={styles.postTags}>
    {tagSlugs.map((slug, i) => (
      <li className={styles.item} key={slug}>
        <Button title={tags[i]} key={slug} to={slug} />
      </li>
    ))}
  </ul>
);

export { ProjectTags };
