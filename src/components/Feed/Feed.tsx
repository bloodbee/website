import React from "react";

import { Link } from "gatsby";
import  { Image } from "../Image";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

type Prop = {
  edge: Edge
}

const RenderFeed: React.FC<Prop> = ({edge}: Prop) => {
  const projectImg = edge.node.frontmatter.socialImage ? edge.node.frontmatter.socialImage.publicURL : "";

  return (
    <div className={styles.item} key={edge.node.fields.slug}>
      <div className={styles.meta}>
        <time
          className={styles.time}
          dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "long", day: "numeric" },
          )}
        >
          {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </time>
        <span className={styles.divider} />
        <span className={styles.category}>
          <Link to={edge.node.fields.categorySlug} className={styles.link}>
            {edge.node.frontmatter.category}
          </Link>
        </span>
      </div>
      <h2 className={styles.title}>
        <Link
          className={styles.link}
          to={edge.node.frontmatter?.slug || edge.node.fields.slug}
        >
          {edge.node.frontmatter.title}
        </Link>
      </h2>
      <p className={styles.description}>
        {edge.node.frontmatter.description}
      </p>
      {/* <Link
        className={styles.more}
        to={edge.node.frontmatter?.slug || edge.node.fields.slug}
      >
        Read
      </Link> */}
      <Link className={styles.moreProject} to={edge.node.frontmatter?.slug || edge.node.fields.slug}>
        <img alt={edge.node.frontmatter.title} src={projectImg} />
      </Link>
    </div>
  );
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <RenderFeed edge={edge} key={edge.node.fields.slug} />
    ))}
  </div>
);

export default Feed;
