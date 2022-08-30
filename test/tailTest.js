const tail = require('../tail')
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail([5,8,7,9]),[8,7,9])
