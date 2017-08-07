'use strict'
const eca = require('./')
const test = require('tape')

test('genLattice', (assert) => {
  assert.plan(4)
  const thirty = eca(30)
  thirty.genLattice()
  thirty.genLattice()
  thirty.genLattice()
  assert.deepEqual(thirty.lattices, ['00000100000', '00001110000', '00011001000', '00110111100'])

  const even = eca(30, {width: 4})
  even.genLattice()
  even.genLattice()
  assert.equal(even.lattices[2].length, 4)
  assert.equal(even.lattices[0], '0100')

  const custom = eca('00111001', {seed: '1001', width: 4})
  custom.genLattice()
  custom.genLattice()
  custom.genLattice()
  assert.deepEqual(custom.lattices, [ '1001', '0100', '0011', '1011' ])
})
test('generateLattices', (assert) => {
  assert.plan(1)
  const thirty = eca(30)
  assert.deepEqual(thirty.generateLattices(3), ['00001110000', '00011001000', '00110111100'])
})

test('_initialLattice', (assert) => {
  assert.plan(2)
  assert.throws(() => eca(30, {width: 3, seed: '1111'}))
  assert.throws(() => eca(1, {seed: [1]}))
})

test('_makeLookup', (assert) => {
  assert.plan(3)
  const env = eca(1)
  assert.equal(env.lookup, '00000001')
  assert.throws(() => env._rule(-1))
  assert.throws(() => env._rule('1'))
})
