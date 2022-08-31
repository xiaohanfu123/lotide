const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅Assertion Passed:${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if(itemsToCount[item]){
        if (results[item]) {
      results[item] += 1;
}     else {
      results[item] = 1;    //results[item] => 
      }
    } 
  
}
  return results; }

module.exports = countOnly
