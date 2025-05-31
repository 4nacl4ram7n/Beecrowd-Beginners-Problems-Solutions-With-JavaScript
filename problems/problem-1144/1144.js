var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let x = Number(lines[0]);
let primeiroNumero = 1;
let primeiro = 0;
let segundo = 0;
let terceiro = 0;

for (i = 1; i <= x; i++) {
    for (j = 0; j < 1; j++) {
        primeiro = primeiroNumero
        segundo = primeiroNumero ** 2
        terceiro = primeiroNumero ** 3
        console.log(`${primeiro} ${segundo} ${terceiro}`)
        segundo ++
        terceiro ++
    }
    console.log(`${primeiro} ${segundo} ${terceiro}`)
    primeiroNumero += 1
}
