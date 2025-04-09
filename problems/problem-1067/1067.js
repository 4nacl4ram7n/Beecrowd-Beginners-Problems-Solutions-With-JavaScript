var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines[0])

if (x % 2 === 0) {
    for (let i = 1; i <= x - 1; i += 2) {
        console.log(i);
    }
} else {
    for (let i = 1; i <= x; i += 2) {
        console.log(i);
    }
}