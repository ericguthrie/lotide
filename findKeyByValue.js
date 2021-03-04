const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  :)`)
  }
  else {
    console.log(`Assertion Failed: :(`)
  }
};



function findKeyValue(object, value) {

  let output = undefined;

  for(let key in object) {
    if(value === object[key]) {
      output = key
    }
  }
return output
}


const map = {"first" : "1", "second" : "2"};
console.log(findKeyValue(map,"2"));







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyValue(bestTVShowsByGenre, "That '70s Show"), undefined);

