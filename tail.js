const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  :)`)
  }
  else {
    console.log(`Assertion Failed: :(`)
  }
};

const tail = function(words) {
  newArray = words;
  newArray.slice(1);
}


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!