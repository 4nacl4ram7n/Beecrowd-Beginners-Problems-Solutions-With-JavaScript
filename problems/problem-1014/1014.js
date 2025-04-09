var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = (lines[0])
let b = (lines[1])

let result = a / b

console.log(result.toFixed(3) + " km/l")