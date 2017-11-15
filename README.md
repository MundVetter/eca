# Elementary Cellular Automata
A generator written in Javascript for Elementary Cellular Automata. We call it eca. Made by Mund & Mart for their *profielwerkstuk*.

## Usage
`eca(rule, options)` has one required parameter(the rule),the second parameter is optional.
The `rule` can be a base 10 integer or an binary string. The second parameter is an object.
That object can contain a `seed`. The `seed` is a binary string.
The `seed` defaults to `'1'`. You can also determine the `width` of the eca.
The `width` property defaults to `11`.
The `.genLattice()` method generates a new lattice and returns that lattice. A lattice is an binary string. The lattices
are saved in the `.lattices` property. You can also use the `.generateLattices(n)` method to generate multiple lattices at once. This returns an array with the created lattices.

Examples:
``` javascript
const eca = require('eca')

const thirty = eca(30)
thirty.genLattice() // => '00001110000'
thirty.genLattice() // => '00011001000'
thirty.genLattice() // => '00110111100'
thirty.lattices
// => [ '00000100000', '00001110000', '00011001000', '00110111100' ]
```
A custom eca:
``` javascript
const custom = eca('00111001', {seed: '1001', width: 4})
custom.generateLattices(3) // => [ '0100', '0011', '1011' ]
custom.lattices
// => [ '1001', '0100', '0011', '1011' ]
```

## Installation
```bash
npm i eca
```
