import path from "path";

const templates = Object.freeze({
  indexTemplate: path.resolve("./src/templates/index-template.tsx"),
  categoryTemplate: path.resolve("./src/templates/category-template.tsx"),
  notFoundTemplate: path.resolve("./src/templates/not-found-template.tsx"),
  categoriesTemplate: path.resolve("./src/templates/categories-template.tsx"),
  tagTemplate: path.resolve("./src/templates/tag-template.tsx"),
  tagsTemplate: path.resolve("./src/templates/tags-template.tsx"),
  pageTemplate: path.resolve("./src/templates/page-template.tsx"),
  postTemplate: path.resolve("./src/templates/post-template.tsx"),
  postsTemplate: path.resolve("./src/templates/posts-template.tsx"),
  projectTemplate: path.resolve("./src/templates/project-template.tsx"),
  projectsTemplate: path.resolve("./src/templates/projects-template.tsx"),
});

export { templates };
