var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);

if ((a % b) === 0) {
    console.log("Sao Multiplos")
} else if ((b % a) === 0) {
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}

