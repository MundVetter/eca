# Elementary Cellular Automata
A generator in javascript for Elementary Cellular Automata in short eca. Made by Mund & Mart for their PWS.

## How to use
`elementaryCellularAutomata(rule, options)` has one required parameter the rule number,
the second parameter is optional. The second parameter is an object. That object
can contain a `seed`. The `seed` is a binary string. The `seed` defaults to `'1'`.
You can also determine the `width` of the eca. The `width` property defaults to
`11`.
With the `.genLine()` method you generate a new line of your eca. All the generated lines and original seed are
saved in an array in the `.rows` property.

example:
``` javascript
let eca = new elementaryCellularAutomata(30)
eca.genLine()
eca.genLine()
eca.genLine()
eca.rows
// => [ '00000100000', '00001110000', '00011001000', '00110111100' ]
```
