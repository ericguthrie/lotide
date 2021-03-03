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

const assertEqual = function(actual, expected) {
  eqArrays(actual, expected); 
  if (actual === expected) {
      console.log(`Assertion Passed:  :)`)
    }
  else if (actual !== expected) {
    console.log(`Assertion Failed: :(`)
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);