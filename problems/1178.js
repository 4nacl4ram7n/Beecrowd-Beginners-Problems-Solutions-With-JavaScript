var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numeroLido = Number(input);

let N = [];
N[0] = numeroLido;

console.log(`N[0] = ${N[0].toFixed(4)}`);

for (let i = 1; i < 100; i++) {
    N[i] = N[i - 1] / 2;
    console.log(`N[${i}] = ${N[i].toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false }) }`);
}

// "wrong answer" no beecrowd
// esse problema encorre num caso de em que temos ambiguidade de arredondamento.
// por isso a substituição de ".toFixed(4)" para ".toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false })"
