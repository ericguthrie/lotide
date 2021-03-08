const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = middle;

