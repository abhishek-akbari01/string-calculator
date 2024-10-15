import { add } from "./add";

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number for a single number input', () => {
    expect(add("1")).toBe(1);
});
  
test('returns the sum of any amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
});
  