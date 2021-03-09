const assert = require('chai').assert;
const assertArraysEqual = require('../../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns equal arrays ([1,2,3], [1,2,3])", () => {
    assert.strictEqual(assertArraysEqual([1,2,3]), [1,2,3]);
  });

});