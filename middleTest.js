const assert = require('chai').assert;
const assertArraysEqual = require('../../assertArraysEqual');
const middle = require('../../middle');



describe("#head", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.Equal(middle([1, 2, 3]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.Equal(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});