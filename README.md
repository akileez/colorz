# colorz
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

## Why?
It loads fast. It's lightweight. It has no dependencies. I wanted to learn.

## Installation
```bash
$ npm install colorz
```

## Usage

see the example.js for further usage

```js
var colorz = require('colorz')

colorz.red('because')
colorz.brRed('because')
colorz.green('because')
colorz.brGreen('because')
colorz.magenta('becaaaausssse')
colorz.cyan('because')
colorz.white('of')
colorz.gray('the')
colorz.inverse('wonderful')
colorz.black('things')
colorz.strikethrough('he')
colorz.red('does')
colorz.bgRed('da da da da da da da, dum dum')
colorz.underline(colorz.cyan('we\'re off to see the wizard'))
colorz.dim('the wonderful wizard of OZ!')
colorz.bold('hello world')

// you can also make things a bit easier for yourself 
const red = colorz.red
const blu = colorz.blue
// etc, etc.

console.log(red('Hello World'))
```

## API
#### `.[style](msg)`
#### `.strip()`
#### `.expose(color:STRING[, text:STRING, noColor:BOOLEAN])`
Expose the ansi escape strings in color (default) 

![](./img/colorz.expose.png)

```js
console.log(colorz.expose('red'))
console.log(colorz.expose('blue', 'See me now'))
console.log(colorz.expose('bgYellow', 'I am a background', false))
console.log(colorz.expose('magenta', true))
```

## See Also
- chalk
- colors

## License
[ISC](https://tldrlegal.com/license/ISC-license)

[npm-image]: https://img.shields.io/npm/v/colorz.svg?style=flat-square
[npm-url]: https://npmjs.org/package/colorz
[travis-image]: https://img.shields.io/travis/akileez/colorz.svg?style=flat-square
[travis-url]: https://travis-ci.org/akileez/colorz
[coveralls-image]: https://img.shields.io/coveralls/akileez/colorz.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/akileez/colorz?branch=master
[downloads-image]: http://img.shields.io/npm/dm/colorz.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/colorz
