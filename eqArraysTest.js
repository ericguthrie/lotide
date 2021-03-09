const assert = require('chai').assert;
const assertEqual = require('../../assertEqual');
const eqArrays = require ('../../eqArrays');

describe("eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3]), [1, 2, 3]);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(eqArrays(['5']), '5'); 
  });

});

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

