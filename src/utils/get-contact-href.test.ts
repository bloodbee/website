import getContactHref from "./get-contact-href";

describe("getContactHref", () => {
  test("successful return contact href", () => {
    expect(getContactHref("rss", "#")).toBe("#");
    expect(getContactHref("github", "#")).toBe("https://github.com/#");
    expect(getContactHref("twitter", "#")).toBe("https://www.twitter.com/#");
    expect(getContactHref("facebook", "#")).toBe("https://www.facebook.com/#");
    expect(getContactHref("instagram", "#")).toBe(
      "https://www.instagram.com/#",
    );
    expect(getContactHref("linkedin", "#")).toBe(
      "https://www.linkedin.com/in/#",
    );
  });
});
