const assert = require('chai').assert;
const assertEqual = require('../../assertEqual');
const tail = require('../../tail');

describe("#tail", () => {
  it(`returns [2, 3] for [1, 2, 3]`, () => {
    assert.deepstrictEqual(head([1, 2, 3]), [2, 3]);
  });

});


// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// describe("#tail", () => {
//   it(`returns ["Y", "L", "L"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
//     assert.strictEqual(head(["Yo Yo", "Lighthouse", "Labs"]), ["Y", "L", "L"]);
//   });

// });