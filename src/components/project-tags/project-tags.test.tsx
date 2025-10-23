import React from "react";
import { test, describe, expect } from "bun:test";
import { render as reactTestingLibraryRender } from "@testing-library/react";

import * as mocks from "@/mocks";
import { ProjectTags } from "@/components/project-tags";
import { createSnapshotsRenderer } from "@/utils/render-with-coil-provider";

describe("ProjectTags", () => {
  test("renders correctly", () => {
    const props = {
      tags: mocks.markdownRemark.frontmatter.tags,
      tagSlugs: mocks.markdownRemark.fields.tagsSlugs,
    };

    const tree = createSnapshotsRenderer(<ProjectTags {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("buttons is rendered correctly and exists", () => {
    const props = {
      tags: mocks.markdownRemark.frontmatter.tags,
      tagSlugs: mocks.markdownRemark.fields.tagsSlugs,
    };

    const tree = reactTestingLibraryRender(<ProjectTags {...props} />);

    props.tags.forEach((tag) => {
      expect(tree.getByText(tag)).toBeInTheDocument();
    });
  });
});
