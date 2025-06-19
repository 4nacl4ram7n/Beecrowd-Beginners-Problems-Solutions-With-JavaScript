var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let tomadas = lines.map(Number);
let total = 0;
for (let i = 0; i < 3; i++) {
    total += (tomadas[i] - 1);
}
console.log(total + tomadas[3]);