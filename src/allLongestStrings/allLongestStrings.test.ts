import { allLongestStrings } from "./allLongestStrings";

test("allLongestStrings", () => {
  expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual([
    "aba",
    "vcd",
    "aba"
  ]);

  expect(
    allLongestStrings(["aba", "aa", "nani", "vcd", "aba", "nani", "nano"])
  ).toEqual(["nani", "nani", "nano"]);
});
