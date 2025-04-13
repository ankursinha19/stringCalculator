// function add(input) {
//     return 0; // just enough to make the first test pass
//   }
  
//   module.exports = { add };
  

// function add(input) {
//   if (input === '') return 0;
//   return parseInt(input, 10);
// }


// function add(input) {
//   if (input === '') return 0;
//   const numbers = input.split(',').map(Number);
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// function add(input) {
//   if (input === '') return 0;
//   const numbers = input.split(',').map(Number);
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

function add(input) {
  if (input === '') return 0;
  const delimiterRegex = /[\n,]/; // Matches either comma or newline
  const numbers = input.split(delimiterRegex).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}








module.exports = { add };