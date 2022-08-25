const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookies) {
  let output = [];

  for (let item of cookies) {
    if (item.includes("🍇")) {
      output.push('Raisin alert!');
    } else {
      output.push("All good!");
    }
  }
  return output;
};



console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);


