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
    this.RESULTS = this.rule(number)

    this.lattices = []
    this.newRow = ''
    this.initialRow()
  }
  rule(number) {
    return this.leftPad(number.toString(2), 8, 0)
  }
  //Generates the initial lattice from a seed
  initialRow() {
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

      let slice = CURR_LATTICE.slice(a, b)
      // on the edge get the cell of the other side
      if(a < 0) {
        let begin = CURR_LATTICE.slice(a)
        let end = CURR_LATTICE.slice(0, b)
        slice = begin + end
      } else if(b > CURR_LATTICE.length) {
        let begin  = CURR_LATTICE.slice(a)
        let end = CURR_LATTICE.slice(0, b - CURR_LATTICE.length)
        slice = begin + end
      }
      for (let i = 0; i < this.PATTERNS.length; i++) {
        if (slice == this.PATTERNS[i]) {
          this.newRow += this.RESULTS.charAt(i)
          break
        }
      }
    }
    this.lattices.push(this.newRow)
    this.newRow = ''
  }
}

module.exports = eca
