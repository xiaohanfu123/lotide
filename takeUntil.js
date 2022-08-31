const takeUntil = function (array, callback) {
  // ...
  let newArray = [];
  for (ele of array) {
    if (callback(ele)) {
      return newArray;
    } else newArray.push(ele)
  } return newArray
}

module.exports = takeUntil