const { validateURL } = require("../validateUrl");

describe("Testing the validateURL functionality", () => {
  test("It should return true for valid URLs", () => {
    const url = "https://www.example.com";
    expect(validateURL(url)).toBe(true);
  });

  test("It should return true for URLs without 'www'", () => {
    const url = "https://example.com";
    expect(validateURL(url)).toBe(true);
  });

  test("It should return false for invalid URLs", () => {
    const url = "htp:/invalid-url";
    expect(validateURL(url)).toBe(false);
  });

  test("It should return false for empty input", () => {
    const url = "";
    expect(validateURL(url)).toBe(false);
  });

  test("It should return true for URLs with paths", () => {
    const url = "https://www.example.com/path/to/resource";
    expect(validateURL(url)).toBe(true);
  });
});
