// @flow strict
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../hooks';

type Props = {
  itemTitle: string,
  itemSlug: string
};

const Comments = ({ itemTitle, itemSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={itemTitle}
      title={itemTitle}
      url={url + itemSlug}
    />
  );
};

export default Comments;
