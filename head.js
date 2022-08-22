const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😄😄Assertion Passed:${actual} === ${expected}`);
  }
  console.assert(actual === expected,`🔥🔥${actual} !== ${expected}`);
};

let array = [];
function head(array) {  
  return (array[0] && array.length) ? array[0] : undefined
}


assertEqual(head([9,5,2,7]),9)