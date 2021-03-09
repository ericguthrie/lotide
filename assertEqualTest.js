const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 1 for 1", () => {
    assert.strictEqual(assertEqual(1), 1);
  });

  it("returns 'ERIC' for ERIC", () => {
    assert.strictEqual(assertEqual('ERIC'), 'ERIC'); 
  });

});
