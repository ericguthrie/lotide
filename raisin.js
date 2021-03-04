const raisinAlarm = function(cookie) {
let reaction = 'All good'; 

  for(let i = 0; i < cookie.length; i++) {
    if(cookie[i] === "🍇") {
      reaction = 'raisin alert'; 
    }
  }
  return reaction;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));  