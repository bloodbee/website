import { ICONS } from "@/constants";
import { getIcon } from "@/utils";

describe("getIcon", () => {
  test("successful return icon", () => {
    expect(getIcon("rss")).toEqual(ICONS.rss);
    expect(getIcon("github")).toBe(ICONS.github);
    expect(getIcon("email")).toEqual(ICONS.email);
    expect(getIcon("twitter")).toBe(ICONS.twitter);
    expect(getIcon("facebook")).toEqual(ICONS.facebook);
    expect(getIcon("linkedin")).toEqual(ICONS.linkedin);
    expect(getIcon("instagram")).toEqual(ICONS.instagram);
  });
});
