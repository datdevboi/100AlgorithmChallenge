import { add } from "./add";

test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(3, 2)).toBe(5);
  expect(add(1, 2, 3, 4, 5)).toBe(15);
  expect(add(50, 75)).toBe(125);
});
