import path from "path";

const templates = Object.freeze({
  notFoundTemplate: path.resolve(
    "./src/templates/NotFoundTemplate/NotFoundTemplate.tsx",
  ),
  categoryTemplate: path.resolve(
    "./src/templates/CategoryTemplate/CategoryTemplate.tsx",
  ),
  categoriesTemplate: path.resolve(
    "./src/templates/CategoriesTemplate/CategoriesTemplate.tsx",
  ),
  tagTemplate: path.resolve("./src/templates/TagTemplate/TagTemplate.tsx"),
  tagsTemplate: path.resolve("./src/templates/TagsTemplate/TagsTemplate.tsx"),
  pageTemplate: path.resolve("./src/templates/PageTemplate/PageTemplate.tsx"),
  postTemplate: path.resolve("./src/templates/PostTemplate/PostTemplate.tsx"),
  postsTemplate: path.resolve("./src/templates/PostsTemplate/PostsTemplate.tsx"),
  projectTemplate: path.resolve("./src/templates/ProjectTemplate/ProjectTemplate.tsx"),
  projectsTemplate: path.resolve("./src/templates/ProjectsTemplate/ProjectsTemplate.tsx"),
});

export default templates;
