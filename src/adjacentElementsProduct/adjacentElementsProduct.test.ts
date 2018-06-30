import { adjacentElementsProduct } from "./adjacentElementsProduct";

test("adjacentElementsProduct", () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
  expect(adjacentElementsProduct([3, 6, -2, 9, 9, 3])).toBe(81);
});
