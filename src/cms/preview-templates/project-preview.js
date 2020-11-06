// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const ProjectPreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="project">
      <h1 className="project__title">{title}</h1>
      <div className="project__body">{body}</div>
    </div>
  );
};

export default ProjectPreview;
