import { almostIncreasingSequence } from "./almostIncreasingSequence";

test("almostIncreasingSequence", () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false);
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true);
  expect(almostIncreasingSequence([1, 2, 3, 4, 5, 6, 7, 8, 10, 9])).toBe(true);
  expect(almostIncreasingSequence([1, , 2, 3, 5, 4, 5, 7, 6])).toBe(false);
});
