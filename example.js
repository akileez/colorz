var ansi = require('./')

var cols = ['white', 'black', 'gray', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow']

console.log('\nForeground Colors\n')
cols.forEach(function (col) {
  var colored = ansi[col](col)
  var bright = ['br', col.substr(0, 1).toUpperCase(), col.substr(1)].join('')
  console.log(colored)
  console.log(ansi[bright](col))
})

console.log('\nBackground Colors\n')

cols.forEach(function (col) {
  var background = ['bg', col.substr(0, 1).toUpperCase(), col.substr(1)].join('')
  var brBackground = ['bb', col.substr(0, 1).toUpperCase(), col.substr(1)].join('')
  if (col === 'black' || col === 'gray' || col === 'red') {
    console.log(ansi[background](col))
    console.log(ansi[brBackground](col))
  } else {
    console.log(ansi[background](ansi.black(col)))
    console.log(ansi[brBackground](ansi.black(col)))
  }
})

console.log(ansi.strip(ansi.red('Hello World')))
console.log(ansi.expose('red', 'This is ska'))
var colors = {
  'num' : 'cyan',
  'str' : 'magenta',
  'bool'  : 'red',
  'undef' : 'grey',
  'null'  : 'grey',
  'attr'  : 'green',
  'quot'  : 'magenta',
  'punc'  : 'yellow',
  'brack' : 'yellow'
}

function c (str, prop) {
  return ansi[colors[prop]](str)
}
console.log(c('true', 'num'))
console.log(ansi.red('because'))
console.log(ansi.green('because'))
console.log(ansi.yellow('because'))
console.log(ansi.blue('because'))
console.log(ansi.magenta('becaaaausssse'))
console.log(ansi.cyan('because'))
console.log(ansi.white('of'))
console.log(ansi.gray('the'))
console.log(ansi.inverse('wonderful'))
console.log(ansi.black('things'))
console.log(ansi.strikethrough('he'))
console.log(ansi.red('does'))
console.log(ansi.bgBlue('da da da da da da da, dum dum'))
console.log(ansi.underline(ansi.cyan('we\'re off to see the wizard')))
console.log(ansi.dim('the wonderful wizard of OZ!'))
console.log(ansi.bold('hello world'))
console.log(ansi.bgRed('da da da da da da da, dum dum'))
console.log(ansi.red('because'))
console.log(ansi.brRed('because'))
console.log(ansi.green('because'))
console.log(ansi.brGreen('because'))
console.log(ansi.yellow('because'))
console.log(ansi.brYellow('because'))
console.log(ansi.blue('because'))
console.log(ansi.brBlue('because'))
console.log(ansi.magenta('becaaaausssse'))
console.log(ansi.brMagenta('becaaaausssse'))
console.log(ansi.cyan('because'))
console.log(ansi.brCyan('because'))
console.log(ansi.white('of'))
console.log(ansi.brWhite('because'))
console.log(ansi.gray('the'))
console.log(ansi.grey('because'))
