
// const assertArraysEqual = require('../assertArraysEqual')


// assertArraysEqual(middle([1,5,6,7]),[5,6])

const middle = require('../middle')
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [5,6] for [1, 5, 6,7]", () => {
    assert.deepEqual(middle([1,5,6,7]), [5,6]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

});