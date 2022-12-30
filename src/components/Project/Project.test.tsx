import React from "react";

import { StaticQuery, useStaticQuery } from "gatsby";

import { Project } from "@/components/Project";
import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Project", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = { project: mocks.markdownRemark };
    const tree = testUtils
      .createSnapshotsRenderer(<Project {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
