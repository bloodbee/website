import CMS from 'netlify-cms';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';
import ProjectPreview from './preview-templates/project-preview';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewTemplate('projects', ProjectPreview);
