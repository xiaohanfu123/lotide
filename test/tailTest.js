const tail = require('../tail')
const assert = require('chai').assert;

describe('#tail',() => {
  it("returns [5,6,7] for [1, 5, 6,7]", () => {
    assert.deepEqual(tail([1,5,6,7]), [5,6,7]);
  });}
)
