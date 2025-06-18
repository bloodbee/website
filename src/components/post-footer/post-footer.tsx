import React, { type FC } from "react";

import * as styles from "./post-footer.module.scss";

interface PostFooterProps {
  date: string;
  dateCreation?: string;
  website?: string;
  customer?: string;
}

const PostFooter: FC<PostFooterProps> = ({ date, dateCreation, website, customer }) => {
  const websiteUrl = website ? website + '?utm_source=bloodbee.space&utm_medium=projects' : "";

  return (
    <div className={styles.postFooter}>
      {customer ? (
        <p className={styles.date}>
        Customer : {customer}
      </p>
      ) : null}
      {website ? (
        <p className={styles.date}>
        Website : <a href={websiteUrl} target="_blank">{website}</a>
      </p>
      ) : null}
      {dateCreation ? (
        <p className={styles.date}>
        Created :{" "}
        {new Date(dateCreation).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short"
        })}
      </p>
      ) : null}
      <p className={styles.date}>
        Published :{" "}
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  )
};

export { PostFooter };
