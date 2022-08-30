const eqArrays = require('./eqArrays')

  const assertArraysEqual = (array1,array2) => {
    if (eqArrays(array1,array2) == 1) {
      return console.log(`✅✅Assertion Passed:${array1} === ${array2}`);
  }
  else
  console.assert(eqArrays(array1,array2) == 1,`⛔⛔${array1} !== ${array2}`);
}

module.exports = assertArraysEqual;

