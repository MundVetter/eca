/*
  Made by Mund & Mart for PWS to show a possible js implementation of
  ellementary cellular automata
*/
'use strict'

const leftPad = require('left-pad')
class eca {
  constructor(number, options = {}) {
    this.seed = options.seed  || '1'
    this.width = options.width || 11
    this.neighbors = options.neighbors || 2
    this.states = options.states || 2
    this.patterns = Math.pow(this.states, this.neighbors + 1)

    if (this.seed.length > this.width)
      throw new Error('The lenght of the seed is bigger than the width of the eca.')
    this.results = this._rule(number)
    this.lattices = []
    this._initialLattice()
  }
  _rule(number) {
    const max = Math.pow(this.states, this.patterns) - 1
    if(number < 0 || number > max)
      throw new Error(`${number} + is not a rule! Max state is: ${max}.`)
    return leftPad(number.toString(this.states), this.patterns, 0)
  }
  //Generates the initial lattice from a seed
  _initialLattice() {
    this.lattices.push(this.seed)
    let margin = (this.width - this.seed.length) / 2

    if (margin % 1 != 0) {
      this.lattices[0] += '0'
      margin = Math.floor(margin)
    }
    for (let i = 0; i < margin; i++) {
      this.lattices[0] += '0'
      this.lattices[0] = '0' + this.lattices[0]
    }
  }
  genLattice() {
    let newLattice = ''
    const lattice = this.lattices[this.lattices.length - 1]
    for (let i = 0; i < lattice.length; i++) {
      const a = i - this.neighbors / 2
      const b = i + 1 + this.neighbors / 2
      const neighborhood = this._getNeighborhood(lattice, a, b)
      const index = this.results.length - (parseInt(neighborhood, this.states) + 1)
      newLattice += this.results.charAt(index)
    }
    this.lattices.push(newLattice)
    return newLattice
  }
  _getNeighborhood(lattice, a, b) {
    // on the edge get the cell of the other side
    if(a < 0) {
      return lattice.slice(a) + lattice.slice(0, b)
    } else if(b > lattice.length) {
      return lattice.slice(a) + lattice.slice(0, b - lattice.length)
    } else {
      return lattice.slice(a, b)
    }
  }
}

module.exports = eca
