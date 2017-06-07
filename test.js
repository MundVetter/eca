'use strict'
const calcEca = require('./')
const test = require('tape')

test('genLattice', (assert) => {
  assert.plan(1)
  assert.deepEqual(calcEca('00000100000', 30).calc().lattices, ['00000100000','00001110000'])
})

console.log(calcEca('00000100000', 30).calc().calc().calc().lattice);
