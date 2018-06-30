import { addTwoDigits } from "./addTwoDigits";

test("addTwoDigits", () => {
  expect(addTwoDigits(29)).toBe(11);
  expect(addTwoDigits("29")).toBe(11);
  expect(addTwoDigits(44)).toBe(8);
  expect(addTwoDigits("44")).toBe(8);
});
