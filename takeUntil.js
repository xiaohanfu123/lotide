const takeUntil = function (array, callback) {
  // ...
  let newArray = [];
  for (ele of array) {
    if (callback(ele)) {
      return newArray;
    } else newArray.push(ele)
  } return newArray
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

