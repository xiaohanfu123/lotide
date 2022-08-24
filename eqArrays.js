const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length){ 
    return false
  }
  for (let i = 0; i < array2.length; i++) {
    if(array1[i] !== array2[i]){return false  
    } 
  } 
    return true
  }
 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅Assertion Passed:${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};

assertEqual((eqArrays([1,2,3],[1,2,3])) , true);

