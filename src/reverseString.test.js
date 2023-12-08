const reverseString = require("./reverseString.js");

test("reverses cat", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("reverses Mutli Word", () => {
  expect(reverseString("Mutli Word")).toBe("droW iltuM");
});

test("reverses case Sensitive", () => {
  expect(reverseString("case Sensitive")).not.toBe("evitisnes esac");
});
