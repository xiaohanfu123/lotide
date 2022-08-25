const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`ssertion Passed:✅✅${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};
