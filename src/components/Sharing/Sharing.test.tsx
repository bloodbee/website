import React from "react";

import { Sharing } from "@/components/Sharing";
import { testUtils } from "@/utils";

describe("Sharing", () => {
  test("renders correctly", () => {
    const props = {
      slug: '/projects/web-agency-specialized-in-chatbot-creation--the-bot-agency',
      text: '/#0/',
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Sharing {...props}></Sharing>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

