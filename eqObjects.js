const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`ssertion Passed:✅✅${actual} === ${expected}`);
  }
  console.assert(actual === expected, `⛔⛔${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}


const eqObjects = function (object1, object2) {
  let array1 = Object.keys(object1)
  let array2 = Object.keys(object2)
  if (array1.length !== array2.length) {
    return false
  }
    for (let key of array1) {

     
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key])

      } else if(object1[key] !== object2[key]) {
        return false
      }

    }  
    return true;
};

const cd = { c: "1", d: 4 };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: [2,3] };

console.log(eqObjects(cd, cd2))