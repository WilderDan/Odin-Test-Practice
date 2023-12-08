const calc = require("./calculator.js");

test("adds 1 + 2", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("adds negative numbers", () => {
  expect(calc.add(3, -6)).toBe(-3);
});

test("adds larger numbers", () => {
  expect(calc.add(3000, 6999)).toBe(9999);
});
