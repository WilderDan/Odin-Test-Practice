const ceasarCipher = require("./ceasarCipher.js");

test("Shift by 1", () => {
  expect(ceasarCipher("abc", 1)).toBe("bcd");
});

test("Shift by 5", () => {
  expect(ceasarCipher("abcd", 5)).toBe("fghi");
});

test("Shift by 26", () => {
  expect(ceasarCipher("home", 26)).toBe("home");
});

test("Shift by 52", () => {
  expect(ceasarCipher("home", 26)).toBe("home");
});

test("Shift by wrapping z to a", () => {
  expect(ceasarCipher("wxyz", 3)).toBe("zabc");
});

test("Shift and keep case", () => {
  expect(ceasarCipher("aBc", 1)).toBe("bCd");
});

test("Shift and keep punctuation", () => {
  expect(ceasarCipher("aBc, def!", 2)).toBe("cDe, fgh!");
});
