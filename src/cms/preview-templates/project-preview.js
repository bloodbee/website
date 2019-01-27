import React from 'react';

const ProjectPreview = ({ entry, widgetFor }) => {
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
