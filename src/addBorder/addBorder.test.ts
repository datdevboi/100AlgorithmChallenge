import { addBorder } from "./addBorder";

test("addBorder", () => {
  expect(addBorder(["abc", "ded"])).toEqual([
    "*****",
    "*abc*",
    "*ded*",
    "*****"
  ]);
});
