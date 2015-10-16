var assert = require('assert')
var ansi   = require('./')

console.log('Foreground colors')

assert.equal(ansi.white('this is printed in white'), '\u001b[37mthis is printed in white\u001b[39m')
