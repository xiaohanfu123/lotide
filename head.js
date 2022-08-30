const assertEqual = require('./assertEqual');

let array = [];

function head(array) {  
  return (array[0] && array.length) ? array[0] : undefined
}

module.exports = head;