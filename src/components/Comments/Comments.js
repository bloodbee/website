// @flow strict
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../hooks';

type Props = {
  title: string,
  slug: string
};

const Comments = ({ title, slug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={title}
      title={title}
      url={url + slug}
    />
  );
};

export default Comments;
