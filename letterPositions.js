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

const letterPositions = function(sentence) {
  const results = {}; //object to store occurences

    // Loop over the letters of the word//
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if(sentence[i] !== ' ') {
  
      // if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1//
      if (!results[letter]) {
        results[letter] = [i];
  
        // else, it means that the property is already there and we just increment it by 1
      } else {
        results[letter].push(i);
      }
    }
    }
    
    return results;
  };
     


console.log(letterPositions("lighthouse in the house"));