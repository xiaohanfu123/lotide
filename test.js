// const person = {
//   name: "Paul",
//   address: {
//     street: "310 W 95th",
//     city: "New York",
//     zipCode: 10027
//   }
// };
// person["address"]["city"];

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(function(x){  
//  return x * 2
// })
  /* x => x * 2); */

// console.log(map1);
// expected output: Array [2, 8, 18, 32]


// const add2 = (input,input2) => input + input2 + 2

// console.log(add2(2,3))




// const count = function(arr) {
//  /* IMPLEMENT ME */
// return arr.length
// }



// const sum = function(arr) {
//   let result = 0;
//   for( let num of arr){
//     result += num};
//     return result;
// };

// const round = function (number) {
//   return Math.round(number * 100) / 100;
// };
  
// const mean = function (arr) {
//   /* IMPLEMENT ME */
//   if(arr.length < 1){return null}
//   else {let sum1 = 0;
//   for(let num of arr){
//   sum1 += num
//   }return Math.round(sum1/arr.length)} 
// };

// const min = function(arr) {
//   /* IMPLEMENT ME */
//   let min = arr[0]
//   for (num of arr) {
//     if(num<min){
//       min = num
//     }
//   }return min
// };
// const range = function (arr) {
//   /* IMPLEMENT ME */
//   let minN = arr[0];
//   for (num of arr) {
//     if (num < minN) {
//       minN = num;
//     }
//   let maxN = arr[0];
//   for (num of arr) {
//     if (num > maxN) {
//       maxN = num;
//       }
//     }}   maxN - minN};


const round = function(number) {
  return Math.round(number * 100) / 100;
};


const median = function(arr) {
  /* IMPLEMENT ME */
  let newArr = [];
  let medNum = 0;
  newArr = arr.sort(function(a, b) {
    return a - b;
  }); 
  if(newArr.length % 2 !==0) {
    return medNum = newArr[Math.floor(newArr.length/ 2)]
  } else if (newArr.length % 2 === 0) {
    return medNum = round(newArr[newArr.length / 2 -1] + newArr[newArr.length/2])/2
  }
  }

  module.exports = median;
  