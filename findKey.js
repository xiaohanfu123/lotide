const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`ssertion Passed:✅✅${actual} === ${expected}`);
  }
  console.assert(actual === expected,`⛔⛔${actual} !== ${expected}`);
};




const findKey = (object,key) =>{
  for(let genre in object){
    if(object[genre] == key)
    return genre// I am not fully clear why it passed, because it passed a key instead of string ) Hold on .... alll keys are strings!
    
  }
}



const bestTVShowsByGenre = { 
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



assertEqual(findKey(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "The Wire"), 'drama');
