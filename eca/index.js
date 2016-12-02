/*
  Made by Mund & Mart for PWS to show a possible js implementation of
  ellementary cellular automata
*/
class elementaryCellularAutomata {
  constructor(number, seed = '1', MAX_WIDTH = 11) {
    this.leftPad = require('left-pad')

    this.seed = seed
    this.MAX_WIDTH = MAX_WIDTH

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

    this.rows = []
    this.newRow = ''
    this.initialRow()
  }
  rule(number) {
    return this.leftPad(number.toString(2), 8, 0)
  }
  //Generates the initial row from a seed
  initialRow() {
    this.rows.push(this.seed)
    let margin = (this.MAX_WIDTH - this.seed.length) / 2

    if (margin % 1 != 0) {
      this.rows[0] += '0'
    }
    for (let i = 0; i < margin; i++) {
      this.rows[0] += '0'
    }
    for (let i = 0; i < margin; i++) {
      this.rows[0] = '0' + this.rows[0]
    }
  }
  // generates a new line and pushes the line into the rows
  genLine() {
    const CURR_ROW = this.rows[this.rows.length - 1]
    for (let i = 0; i < CURR_ROW.length; i++) {
      let a = i - 1
      let b = i + 2

      let slice = CURR_ROW.slice(a, b)
      // on the edge get the cell of the other side
      if(a < 0) {
        let begin = CURR_ROW.slice(a)
        let end = CURR_ROW.slice(0, b)
        slice = begin + end
      } else if(b > CURR_ROW.length) {
        let begin  = CURR_ROW.slice(a)
        let end = CURR_ROW.slice(0, b - CURR_ROW.length)
        slice = begin + end
      }
      for (let i = 0; i < this.PATTERNS.length; i++) {
        if (slice == this.PATTERNS[i]) {
          this.newRow += this.RESULTS.charAt(i)
          break
        }
      }
    }
    this.rows.push(this.newRow)
    this.newRow = ''
  }
}

//example use
let eca = new elementaryCellularAutomata(30)
eca.genLine()
eca.genLine()
eca.genLine()
console.log(eca.rows)
//returns [ '00000100000', '00001110000', '00011001000', '00110111100' ]
