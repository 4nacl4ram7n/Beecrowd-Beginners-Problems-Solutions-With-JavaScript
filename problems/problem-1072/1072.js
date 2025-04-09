var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let numeroDeCasos = Number(lines.shift());
let contadorDentro = 0;
let contadorFora = 0;

for (let index = 0; index < numeroDeCasos; index += 1) {
    let elementoAnalisado = Number(lines.shift())
    if (elementoAnalisado >= 10 && elementoAnalisado <= 20) {
        contadorDentro += 1;
    } else {
        contadorFora += 1;
    }
}
console.log(`${contadorDentro} in`);
console.log(`${contadorFora} out`);