// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed:  :)`);
//   }
//   else {
//     console.log(`Assertion Failed: :(`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(array) {
  newArray = array;
  return newArray.shift(0);
}


module.exports = head;


