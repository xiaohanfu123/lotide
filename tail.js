const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😄😄Assertion Passed:${actual} === ${expected}`);
  }
  console.assert(actual === expected,`🔥🔥${actual} !== ${expected}`);
};


let array = [];
const tail = (array) => {
  return newArray = array.splice(1);

}
const nums = tail([5,6,7])

assertEqual(nums[0],6)

