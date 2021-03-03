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
