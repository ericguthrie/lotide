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


const without = function(arr1, exclude) {
let results = []

  for(let i = 0; i < arr1.length; i++) {
    if (!exclude.includes(arr1[i])) {
      results.push(arr1[i])
    }
  }
return results
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);