/*
a mininamilist version of eca
*/
'use strict'
const assert = require('assert');
function genLattice(lattice, rule, states = 2, neighbors = 2) {
  assert.equal(typeof lattice, 'string')
  assert.equal(typeof rule && typeof state && typeof neighbors, 'number')
  const patterns = Math.pow(states, neighbors + 1)
  const max = Math.pow(states, patterns) - 1
  assert.ok(rule >= 0 && rule <= max)
  const lookup = rule.toString(states).padStart(patterns, 0)
  let newLattice = ''
  for(let i = 0; i < lattice.length; i++) {
    const a = i - neighbors / 2
    const b = i + 1 + neighbors / 2
    const neighborhood = lattice.substring(a, b)
    const index = lookup.length - (parseInt(neighborhood, states) + 1)
    newLattice += lookup.charAt(index)
  }
  return newLattice
}

module.exports = genLattice
