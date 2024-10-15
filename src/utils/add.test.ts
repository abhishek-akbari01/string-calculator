import { add } from "./add";

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number for a single number input', () => {
    expect(add("1")).toBe(1);
});
  