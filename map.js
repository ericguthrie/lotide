const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; 
    }
  }
  return true;
}

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {

      console.log(`Assertion Passed: :) ${a} === ${b}`);
    } else {
    console.log(`Assertion Failed: :( ${a} !== ${b}`);
  }
};

const words = ["Beef", "Wife", "Hilda",
 "Sparticus", "Constantinople", "Dave", "Lisa", "L-dawg", "Bean"];



 const map = (array, callback) => {
  const results = [];

  for(let item of array) {
    results.push(callback(item));
  }
   return results;
 };

 const results1 = map(words, word => word[0]);
 console.log(results1);
 