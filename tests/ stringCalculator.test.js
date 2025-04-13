const { add } = require('../src/stringCalculator');

// test('returns 0 for an empty string', () => {
//   expect(add("")).toBe(0);
// });


test('returns number when a single number is passed', () => {
  const result = add('1');
  expect(result).toBe(1);
});