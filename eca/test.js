const eca = require('./');
const test = require('tape');

test('eca', (assert)=> {
  assert.plan(3)
  let thirty = new eca(30)
  thirty.genlattice()
  thirty.genlattice()
  thirty.genlattice()
  assert.deepEqual(thirty.lattices, ['00000100000', '00001110000', '00011001000', '00110111100'])

  let even = new eca(30, {width: 4})
  even.genlattice()
  even.genlattice()
  assert.equal(even.lattices[2].length, 4)
  assert.equal(even.lattices[0], '0100')
})
