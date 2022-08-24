// const eqArrays = function(array1,array2) {

//   let intString = array1.join('');
//   for (let i = 0; i < array2.length; i++) {
//     const words = array2.join('');
//     if(intString !== words){return false  
//     }
//   }
//     return true
//   }
 
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅Assertion Passed:${actual} === ${expected}`);
//   }
//   console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
// };

// assertEqual((eqArrays([1,2,3],[1,2,3])) , true);


const assertArraysEqual = (array1, array2) =>{
    let intString = array1.join('');
    for (let i = 0; i < array2.length; i++) {
      const words = array2.join('');
      if(intString !== words){return false  
      }
    }
      return true
}