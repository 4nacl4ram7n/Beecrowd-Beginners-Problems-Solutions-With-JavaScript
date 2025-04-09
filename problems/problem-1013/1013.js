var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


let a = parseInt(lines[0])
let b = parseInt(lines[1])
let s = parseInt(lines[2])

let result = Math.max(a, b, s)

console.log(result + " eh o maior")