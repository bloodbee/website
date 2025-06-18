import React from "react";

import { useSiteMetadata } from "@/hooks/use-site-metadata";

import * as styles from "./post-author.module.scss";

const PostAuthor = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.postAuthor}>
      <p>
        {author.description}
      </p>
    </div>
  );
};

export { PostAuthor };
