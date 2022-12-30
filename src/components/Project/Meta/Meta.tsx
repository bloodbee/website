import React from "react";

import * as styles from "./Meta.module.scss";
import type { Node } from "@/types";

interface Props {
  project: Node;
}

const Meta: React.FC<Props> = ({ project }: Props) => {
  const {
    customer,
    website,
    date,
    dateCreation
  } = project.frontmatter;
  const websiteUrl = website + '?utm_source=bloodbee.space&utm_medium=projects';

  return (
    <div className={styles.meta}>
      <p className={styles.footer}>
        <p className={styles.item}>
          Published: {new Date(date).toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})}
        </p>
        <p className={styles.item}>
          Customer : {customer}
        </p>
        <p className={styles.item}>
          Website : <a href={websiteUrl} target="_blank">{website}</a>
        </p>
        <p className={styles.item}>
          Created : {new Date(dateCreation).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
        </p>
      </p>
    </div>
  );
};

export default Meta;
