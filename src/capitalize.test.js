const capitalize = require("./capitalize.js");

test("capitalizes cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("capitalizes house", () => {
  expect(capitalize("house")).toBe("House");
});

test("capitalizes already capitalized string", () => {
  expect(capitalize("Bernie")).toBe("Bernie");
});

test("capitalizes multi word string", () => {
  expect(capitalize("my name is")).toBe("My name is");
});

test("capitalizes strings with punctuation", () => {
  expect(capitalize("here is,!.;: and more words")).toBe(
    "Here is,!.;: and more words"
  );
});
