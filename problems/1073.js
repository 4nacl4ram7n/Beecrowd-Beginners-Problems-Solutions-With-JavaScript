var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = Number(lines[0]);
let p = 2;

if (i % 2 === 0) {
    for (let i = 2; i <= lines[0]; i += 2) {
        console.log(`${i}^2 = ${square(i, p)}`);
    }
} else if (i % 2 !== 0) {
    for (let i = 2; i <= lines[0]; i += 2) {
        console.log(`${i}^2 = ${square(i, p)}`);
    }
}
function square(i, p) {
    return Math.pow(i, p);
}