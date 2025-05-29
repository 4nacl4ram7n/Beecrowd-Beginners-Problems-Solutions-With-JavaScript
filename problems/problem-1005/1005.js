var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

let result = ((a*3.5)+(b*7.5))/11


console.log("MEDIA = " + result.toFixed(5))
