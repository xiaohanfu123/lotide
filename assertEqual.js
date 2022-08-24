const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅Assertion Passed:${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};

assertEqual('light house','light house');