const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`ssertion Passed:✅✅${actual} === ${expected}`);
  }
  console.assert(actual === expected, `⛔⛔${actual} !== ${expected}`);
};

const findKey = (object, callback)=>{
  for (let key in object) {
    if(callback(object[key])){
      return key
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) )

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3), 'Akaleri')