var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159
let R = Number(input)

let result = (4.0 / 3.0) * PI * (R * R * R)

console.log("VOLUME = " + result.toFixed(3))