# Elementary Cellular Automata
A generator written in Javascript for Elementary Cellular Automata. We call it eca. Made by Mund & Mart for their *profielwerkstuk*.

## How to use
`eca(rule, options)` has one required parameter(the rule),the second parameter is optional.
The `rule` can be a base 10 number(bigger than 0 and smaller than 256) or an, 8 character long, binary string.
The second parameter is an object. That object can contain a `seed`. The `seed` is a binary string.
The `seed` defaults to `'1'`. You can also determine the `width` of the eca.
The `width` property defaults to`11`.
The `.genLattice()` method generates a new lattice and returns that lattice. The lattices
are saved in the `.lattices` property.

examples:
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
custom.genLattice() // => '0100'
custom.genLattice() // => '0011'
custom.genLattice() // => '1011'
custom.lattices
// => [ '1001', '0100', '0011', '1011' ]
```

## Instalation
```bash
npm i eca
```
