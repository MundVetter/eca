/*
  Made by Mund & Mart for PWS to show a possible js implementation of
  ellementary cellular automata
*/
'use strict'

class eca {
  constructor(number, options = {}) {
    this.leftPad = require('left-pad')

    this.seed = options.seed  || '1'
    this.width = options.width || 11
    if (this.seed.length > this.width) {
      throw new Error('The lenght of the seed is bigger than the width of the eca')
    }
    this.PATTERNS = [
      '111',
      '110',
      '101',
      '100',
      '011',
      '010',
      '001',
      '000'
    ]
    this.RESULTS = this._rule(number)

    this.lattices = []
    this.newLattice = ''
    this._initialLattice()
  }
  _rule(number) {
    if(number < 0 || number > 256)
      throw new Error(number + ' is not a rule!')
    return this.leftPad(number.toString(2), 8, 0)
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
    }
    for (let i = 0; i < margin; i++) {
      this.lattices[0] = '0' + this.lattices[0]
    }
  }
  // generates a new line and pushes the line into the lattices
  genlattice() {
    const CURR_LATTICE = this.lattices[this.lattices.length - 1]
    for (let i = 0; i < CURR_LATTICE.length; i++) {
      let a = i - 1
      let b = i + 2

      const neighborhood = this._getNeighborhood(CURR_LATTICE, a, b)

      for (let i = 0; i < this.PATTERNS.length; i++) {
        if (neighborhood == this.PATTERNS[i]) {
          this.newLattice += this.RESULTS.charAt(i)
          break
        }
      }
    }
    this.lattices.push(this.newLattice)
    this.newLattice = ''
  }
  _getNeighborhood(lattice, a, b) {
    let neighborhood = lattice.slice(a, b)
    // on the edge get the cell of the other side
    if(a < 0) {
      let begin = lattice.slice(a)
      let end = lattice.slice(0, b)
      neighborhood = begin + end
    } else if(b > lattice.length) {
      let begin  = lattice.slice(a)
      let end = lattice.slice(0, b - lattice.length)
      neighborhood = begin + end
    }
    return neighborhood
  }
}

module.exports = eca
