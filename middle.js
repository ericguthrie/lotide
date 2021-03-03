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


const middle = nums => { 
  let middle = []
  if (nums.length % 2 == 0) {
    middle = Math.round((nums.length / 2) - 1);
    return nums.slice(middle, middle + 2);

  } 
  else {
    middle = Math.round((nums.length / 2) - 1);
    return nums[middle];
  }
}

console.log(middle([1, 2, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
