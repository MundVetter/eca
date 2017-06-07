'use strict'
const genLattice = require('./')
const test = require('tape')

test('genLattice', (assert) => {
  assert.plan(1)
  assert.equal(genLattice('00000100000', 30), '00001110000')
})
