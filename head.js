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
  return newArray.shift(0)
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

