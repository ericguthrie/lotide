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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let results = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          results = false;
        }
      } else if (object1[key] !== object2[key]) {
        results = false;
      }
    }
  } else {
    results = false;
  }
  
  return results;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)) {
    console.log(`Assertion Passed: :) ${inspect(actual)} === ${inspect(expected)}`)
  }
  else {
    console.log(`Assertion failed: :( ${inspect(actual)} !== ${inspect(expected)}`)
  }
};


