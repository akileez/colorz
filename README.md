# colorz
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

> Ansi escaped color styling for the console/terminal

## Why?
It loads fast. It runs fast. It's lightweight. It has no dependencies. I wanted to learn.

## Installation
```bash
$ npm install colorz
```

## Usage

see the [example.js](example.js) for further usage

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
![](./img/colorz.jpg)


## API
#### `.[style](msg)`

**modifiers**  
  reset         
  bold          
  dim           
  italic        
  underline     
  inverse       
  hidden        
  strikethrough 
  
  **foregrounds**  
  black         
  gray          
  grey          
  red           
  green         
  yellow        
  blue          
  magenta       
  cyan          
  white         
  
  **bright foregrounds**  
  brBlack       
  brGray        
  brGrey        
  brRed         
  brGreen       
  brYellow      
  brBlue        
  brMagenta     
  brCyan        
  brWhite       
  
  **backgrounds**  
  bgBlack       
  bgGray        
  bgGrey        
  bgRed         
  bgGreen       
  bgYellow      
  bgBlue        
  bgMagenta     
  bgCyan        
  bgWhite       
  
  **bright backgrounds**  
  bbBlack       
  bbGray        
  bbGrey        
  bbRed         
  bbGreen       
  bbYellow      
  bbBlue        
  bbMagenta     
  bbCyan        
  bbWhite       

#### `.strip(ansiDecoratedTextMsg)`
Strip the ansi escaped sequences off the text   

```js
var text = colorz.cyan('Hello')
console.log(colorz.strip(text))
// --> Hello
```

#### `.expose(color:STRING[, text:STRING, noColor:BOOLEAN])`
Expose the ansi escape strings in color (default) 

```js
console.log(colorz.expose('red'))
console.log(colorz.expose('blue', 'See me now'))
console.log(colorz.expose('bgYellow', 'I am a background', false))
console.log(colorz.expose('magenta', true))
```

![](./img/colorz.expose.png)

## See Also
- [chalk](https://www.npmjs.com/package/chalk). Terminal string styling done right. Much color.  
- [colors](https://www.npmjs.com/package/colors). get colors in your node.js console  
- [colour.js](https://github.com/dcodeIO/colour.js). A cored, fixed, documented and optimized version of the popular `colors.js`  
- [neocolor](https://www.npmjs.com/package/neocolor). Minimal library for colored console output  
- [ansi-wrap](https://www.npmjs.com/package/ansi-wrap). Create ansi colors by passing the open and close codes.  
- [clor](https://github.com/bucaran/clor). Sexy terminal styles   
- [colorful](https://github.com/lepture/colorful). colorful environment for command line tools in node  


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
