
const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) { 
    return false
  }
  for (let i = 0; i < array2.length; i++) {
    if(array1[i] !== array2[i]){return false  
    } 
  } 
    return true
  } 


  const assertArraysEqual = (array1,array2) => {
    if (eqArrays(array1,array2) == 1) {
      return console.log(`✅✅Assertion Passed:${array1} === ${array2}`);
  }
  else
  console.assert(eqArrays(array1,array2) == 1,`⛔⛔${array1} !== ${array2}`);
}

assertArraysEqual([1,2,3],[1,2,3])

 // => ["1", "2"]

 const without = (source,toRemove) => {
  let newArray =[];
  for (let i = 0; i < source.length; i++) {
    // if(source[i] !== toRemove[j])
    if (!toRemove.includes(source[i])) newArray.push(source[i])
  }return newArray
 }

 console.log(without(["1", "2", "3"], [1, 2, "3"]))