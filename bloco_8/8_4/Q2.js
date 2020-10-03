const assert = require('assert')

function sum(...inputNums) {
  return inputNums.reduce((acc, actual) => {return acc + actual}, 0)
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)