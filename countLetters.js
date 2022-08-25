const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`ssertion Passed:✅✅${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};

const countLetters = (string) => {
  const output = {};
  for (let letter of string){ 
    if (output[letter]){
      output[letter] += 1
    }  else output[letter] = 1
  } return output
}

console.log(countLetters('HAHA'))

