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

// function add(input) {
//   if (input === '') return 0;
//   const delimiterRegex = /[\n,]/; // Matches either comma or newline
//   const numbers = input.split(delimiterRegex).map(Number);
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

function add(input) {
  if (input === '') return 0;

  // Check for custom delimiter definition at the start
  if (input.startsWith('//')) {
    const delimiterSection = input.split('\n')[0];
    const delimiter = delimiterSection.slice(2); // Extract delimiter
    input = input.slice(delimiterSection.length + 1); // Remove delimiter definition from input
    const delimiterRegex = new RegExp(`[${delimiter}\n,]`); // Support custom delimiter along with comma and newline
    const numbers = input.split(delimiterRegex).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  // Default case for commas and newlines
  const delimiterRegex = /[\n,]/;
  const numbers = input.split(delimiterRegex).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}







module.exports = { add };