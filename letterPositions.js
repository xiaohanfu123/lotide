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

  const assertArraysEqual = (array1,array2) => {
    if (eqArrays(array1,array2) == 1) {
      return console.log(`✅✅Assertion Passed:${array1} === ${array2}`);
  }
  else
  console.assert(eqArrays(array1,array2) == 1,`⛔⛔${array1} !== ${array2}`);
}


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if(letter !== 0){
    if(results[letter]){results[letter].push(i)}
    else results[letter] = [i];}
  
}return results;}

assertArraysEqual(letterPositions("hello").l, [2,3]);
