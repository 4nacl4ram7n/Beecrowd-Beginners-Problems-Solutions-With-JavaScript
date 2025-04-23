var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let min = Math.min(lines[0], lines[1])
let max = Math.max(lines[0], lines[1])
let sum = 0;

for (i = min; i <= max; i++) {
    if ( i % 13 !== 0) {
        sum += i
    }
}

console.log(sum)
