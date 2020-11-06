// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({
  children,
  title,
  description,
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="language" content="en-US" />
        <meta name="author" content="Bloodbee" />
        <meta name="reply-to" content="mathieu_dufour@hotmail.fr" />
        <meta name="description" content={description} />
        <meta name="keywords" content="space, web, developer, cryptocurrency, entrepreneur, css, js, html, react, reactjs, develomment, www, backend, frontend, bloodbee, side, project, cryptocurrencies, blockchain, php, laravel, nodejs, python, ai, machine, learning, artificial, intelligence" />
        <meta name="google-site-verification" content="nm1U43c4PkTklri8nelGNn_vD_M4SoDW61zLuD2oWxc" />
        <meta name="title" content="Bloodbee - Machine learning and web developer | Home" />>
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloodbee.space/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bloodbee.space/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
