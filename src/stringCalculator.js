// function add(input) {
//     return 0; // just enough to make the first test pass
//   }
  
//   module.exports = { add };
  

function add(input) {
  if (input === '') return 0;
  return parseInt(input, 10);
}
module.exports = { add };