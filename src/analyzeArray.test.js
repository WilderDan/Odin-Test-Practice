const analyzeArray = require("./analyzeArray.js");

// Test average

test("Gets average for [1, 2, 3]", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("Gets average for [5, 16, 43, 66]", () => {
  expect(analyzeArray([5, 16, 43, 66]).average).toBe(32.5);
});

test("Gets average for [-1, -2, 4]", () => {
  expect(analyzeArray([-1, -2, 8]).average).toBe(5 / 3);
});

test("Gets average for []", () => {
  expect(analyzeArray([]).average).toBe(null);
});

// Test min

test("Gets min for [5, 4, 6]", () => {
  expect(analyzeArray([5, 4, 6]).min).toBe(4);
});

test("Gets min for []", () => {
  expect(analyzeArray([]).min).toBe(null);
});

test("Gets min for [100, 1000, -10, 999, -20, 0]", () => {
  expect(analyzeArray([100, 1000, -10, 999, -20, 0]).min).toBe(-20);
});

test("Gets min for [1]", () => {
  expect(analyzeArray([1]).min).toBe(1);
});

// Test max

test("Gets max for [1, 2, 3]", () => {
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test("Gets max for []", () => {
  expect(analyzeArray([]).max).toBe(null);
});

test("Gets max for [100, -200, 3]", () => {
  expect(analyzeArray([100, -200, 3]).max).toBe(100);
});

// Test length

test("Gets length for [1, 2, 3, 4, 5, 6]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6]).length).toBe(6);
});

test("Gets length for []", () => {
  expect(analyzeArray([]).length).toBe(0);
});
