'use strict'
const eca = require('./')
const test = require('tape')

test('eca', (assert) => {
  assert.plan(4)
  let thirty = eca(30)
  thirty.genLattice()
  thirty.genLattice()
  thirty.genLattice()
  assert.deepEqual(thirty.lattices, ['00000100000', '00001110000',
  '00011001000', '00110111100'])

  let even = eca(30, {width: 4})
  even.genLattice()
  even.genLattice()
  assert.equal(even.lattices[2].length, 4)
  assert.equal(even.lattices[0], '0100')

  assert.throws(() => eca(30, {width: 3, seed: '1111'}))
})
test('getNeighborhood', (assert) => {
  assert.plan(3)
  let env = eca(1)
  assert.equal(env._getNeighborhood('abcdef', -1, 2), 'fab')
  assert.equal(env._getNeighborhood('abcdef', 4, 7), 'efa')
  assert.equal(env._getNeighborhood('abcdef', 2, 5), 'cde')
})
test('rule', (assert) => {
  assert.plan(2)
  let env = eca(1)
  assert.equal(env.results, '00000001')
  assert.throws(() => env._rule(-1))
})
