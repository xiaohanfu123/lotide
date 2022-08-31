const middle = (array) => {
  let newArray = []
  let length = array.length

  if (array.length <= 2){
    return newArray}
  
  if (array.length % 2 == 0) { 
    newArray.push(array[length / 2 - 1]  , array[length / 2 ] )
    return newArray
  } 
   else newArray.push(array[Math.floor(length /2)])
   return newArray
}

module.exports = middle;

console.log(middle([1,5,6,7]))