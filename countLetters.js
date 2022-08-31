const countLetters = (string) => {
  const output = {};
  for (let letter of string){ 
    if (output[letter]){
      output[letter] += 1
    }  else output[letter] = 1
  } return output
}
module.exports = countLetters;

