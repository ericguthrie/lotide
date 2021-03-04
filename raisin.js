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
  
function raisinAlarmArray(cookie) {
  let reaction = 'All good!';
  let output = [];
  for (let i = 0; i < cookie.length; i++) {
    for (let j = 0; j < cookie[i].length; j++) {
     if(cookie[i][j] === "🍇") {
       reaction = 'RAISINS OH GOD RAISINS'; 
    }
    if (j === cookie[i].length -1) {
      output.push(reaction);
      reaction = 'All good!';
    } 
  } 
} return output;
};

  console.log(raisinAlarmArray(
    [
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"]
    ]
  ));

  //pair programming with others