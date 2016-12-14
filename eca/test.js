const eca = require('./');
const test = require('tape');

test('eca', (assert)=> {
  assert.plan(3)
  let thirty = new eca(30)
  thirty.genLine()
  thirty.genLine()
  thirty.genLine()
  assert.deepEqual(thirty.rows, ['00000100000', '00001110000', '00011001000', '00110111100'])

  let even = new eca(30, {width: 4})
  even.genLine()
  even.genLine()
  assert.equal(even.rows[2].length, 4)
  assert.equal(even.rows[0], '0100')
})
