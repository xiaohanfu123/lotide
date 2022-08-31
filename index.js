const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('./eqArrays')
const assertObjectEqual = require('./assertArraysEqual')
const letterPositions = require('./letterPositions')
const map = require('./map')
const findKey = require('./findKey')
const without = require('./without')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')





module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertObjectEqual: assertObjectEqual,
  letterPositions: letterPositions,
  map: map,
  findKey: findKey,
  without: without,
  countOnly: countOnly,
  countLetters: countLetters
};