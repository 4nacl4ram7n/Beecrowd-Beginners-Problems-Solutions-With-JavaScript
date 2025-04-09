var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = (lines[0].split(' '));
let [x2, y2] = (lines[1].split(' '));

let a = Math.pow((x2 - x1), 2);
let b = Math.pow((y2 - y1), 2);
let final = Math.pow((a + b), (1 / 2));

console.log(final.toFixed(4));