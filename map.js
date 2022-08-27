const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words,  word  => word[0]); // Same as (word)=> (word[0]) It is a singled-line ,anonymous arrow function with implicit return. #|-___-|```
console.log(results1);
