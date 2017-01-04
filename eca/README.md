# Elementary Cellular Automata
A generator in javascript for an Elementary Cellular Automata in short eca. Made by Mund & Mart for their PWS.

## How to use
`eca(rule, options)` has one required parameter(the rule number),
the second parameter is optional. The second parameter is an object. That object
can contain a `seed`. The `seed` is a binary string. The `seed` defaults to `'1'`.
You can also determine the `width` of the eca. The `width` property defaults to
`11`.
The `.genLattice()` method generates a new lattice and returns that lattice. The lattices
are saved in the `.lattices` property.

example:
``` javascript
const eca = require('eca')

let thirty = new eca(30)
thirty.genLattice() // => 00001110000
thirty.genLattice() // => 00011001000
thirty.genLattice() // => 00110111100
thirty.lattices
// => [ '00000100000', '00001110000', '00011001000', '00110111100' ]
```
