import { absoluteValuesSumMinimization } from "./absoluteValuesSumMinization";

test("absoluteValuesSumMinimization", () => {
  expect(absoluteValuesSumMinimization([2, 4, 7])).toBe(4);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toBe(4);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(7);
  expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])).toBe(7);
});
