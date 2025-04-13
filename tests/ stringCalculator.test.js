const { add } = require('../src/stringCalculator');

// test('returns 0 for an empty string', () => {
//   expect(add("")).toBe(0);
// });


// test('returns number when a single number is passed', () => {
//   const result = add('1');
//   expect(result).toBe(1);
// });


// test('returns sum of two comma-separated numbers', () => {
//   const result = add('1,2');
//   expect(result).toBe(3);
// });


// test('returns sum of multiple comma-separated numbers', () => {
//   const result = add('1,2,3,4');
//   expect(result).toBe(10);
// });


// test('supports newlines as delimiters along with commas', () => {
//   const result = add('1\n2,3');
//   expect(result).toBe(6);
// });


// test('supports custom delimiters defined in input', () => {
//   const result = add('//;\n1;2;3');
//   expect(result).toBe(6);
// });


test('throws error for negative numbers', () => {
  expect(() => add('1,-2,3')).toThrow('Negatives not allowed: -2');
});
