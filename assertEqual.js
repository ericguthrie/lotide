const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: :)")
  }
  else {
    console.log("Assertion Failed: :(")
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("ERIC", "ERIC");
assertEqual(1,2);