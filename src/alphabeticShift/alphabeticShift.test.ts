import { alphabeticShift } from "./alphabeticShift";

test("alphabeticShift", () => {
  expect(alphabeticShift("crazy")).toBe("dsbaz");
});
