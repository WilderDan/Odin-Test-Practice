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

// Multiply
test("Multiplies 11 * 9", () => {
  expect(calc.multiply(11, 9)).toBe(99);
});

test("Multiplies larger numbers", () => {
  expect(calc.multiply(1234, 99)).toBe(122166);
});

test("Multiplies negative numbers", () => {
  expect(calc.multiply(10, -2)).toBe(-20);
});

test("Multiplies two negative numbers", () => {
  expect(calc.multiply(-10, -2)).toBe(20);
});

// Divide
test("Divides two numbers", () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test("Divides with decimal", () => {
  expect(calc.divide(9, 2)).toBe(4.5);
});

test("Divides with negative numbers", () => {
  expect(calc.divide(20, -5)).toBe(-4);
});

test("Divides by 0", () => {
  expect(calc.divide(10, 0)).toBe(Infinity);
});
