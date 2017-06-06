/*
  Made by Mund & Mart for their profielwerkstuk to show a possible js implementation of
  ellementary cellular automata
*/
'use strict'

const assert = require('assert');
class Eca {
  constructor(number, options = {}) {
    this.neighbors = options.neighbors || 2
    this.states = options.states || 2
    assert.equal(typeof this.neighbors && typeof this.states, 'number')

    this.patterns = Math.pow(this.states, this.neighbors + 1)

    this.lattices = []
    this.results = this._rule(number)
    this._initialLattice(options.seed, options.width)
  }
  _rule(number = 30) {
    assert.equal(typeof number, 'number')
    const max = Math.pow(this.states, this.patterns) - 1
    assert.ok(number >= 0 && number <= max)
    return number.toString(this.states).padStart(this.patterns, 0)
  }
  //Generates the initial lattice from a seed
  _initialLattice(seed = '1', width = 11) {
    assert.ok(seed.length <= width)
    assert.equal(typeof seed, 'string')

    this.lattices.push(seed)
    let margin = (width - seed.length) / 2
    if(margin % 1 != 0) {
      this.lattices[0] += '0'
      margin = Math.floor(margin)
    }
    for(let i = 0; i < margin; i++) {
      this.lattices[0] += '0'
      this.lattices[0] = '0' + this.lattices[0]
    }
  }
  genLattice() {
    let newLattice = ''
    const lattice = this.lattices[this.lattices.length - 1]
    for(let i = 0; i < lattice.length; i++) {
      const a = i - this.neighbors / 2
      const b = i + 1 + this.neighbors / 2
      const neighborhood = lattice.substring(a, b)
      const index = this.results.length - (parseInt(neighborhood, this.states) + 1)
      newLattice += this.results.charAt(index)
    }
    this.lattices.push(newLattice)
    return newLattice
  }
}
function eca(number, options = {}) {
  return new Eca(number, options)
}
module.exports = eca
