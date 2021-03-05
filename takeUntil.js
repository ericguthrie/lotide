const takeUntil = function(array, callback) {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      return array.slice(0, [i]);
    }
  }
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const results2 = takeUntil(data2, x => x === ',');





console.log(results2);


// expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


// function takeWhile(array, predicate) {
//   return (array && array.length)
//     ? baseWhile(array, getIteratee(predicate, 3))
//     : [];
// }