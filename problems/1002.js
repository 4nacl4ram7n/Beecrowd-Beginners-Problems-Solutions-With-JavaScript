var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159
var raio = Number(input)

var area = pi * Math.pow(raio, 2)

console.log("A=" + area.toFixed(4))