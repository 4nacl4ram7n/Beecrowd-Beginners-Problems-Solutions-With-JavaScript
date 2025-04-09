var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numeroDeCasos = Number(lines.shift()); // ok
let notas = lines;

function media(a, b, c) {
    return ((a * 2) + (b * 3) + (c * 5)) / 10
}


for (index = 0; index < numeroDeCasos; index++) {
    let [a, b, c] = notas.shift().split(' ').map(Number);
    console.log(`${media(a, b, c).toFixed(1)}`)
}
