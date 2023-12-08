const calc = require("./calculator.js");

// Add
test("adds 1 + 2", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("adds negative numbers", () => {
  expect(calc.add(3, -6)).toBe(-3);
});

test("adds larger numbers", () => {
  expect(calc.add(3000, 6999)).toBe(9999);
});

// Subtract
test("Subtracts 8 - 6", () => {
  expect(calc.subtract(8, 6)).toBe(2);
});

test("Subtracts negative numbers", () => {
  expect(calc.subtract(80, -14)).toBe(94);
});

test("Subtracts when 2nd operand greater than first", () => {
  expect(calc.subtract(10, 20)).toBe(-10);
});
