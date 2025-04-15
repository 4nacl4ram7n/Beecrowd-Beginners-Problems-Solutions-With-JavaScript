var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let contadorPositivos = 0;
let contadorNegativos = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (i = 0; i < 5; i ++) {
    if ( lines[i] % 2 === 0) {
        contadorPares += 1;
    }
    if (lines[i] % 2 !== 0 ) {
        contadorImpares += 1;
    } 
    if (lines[i] > 0) {
        contadorPositivos += 1
    }
    if (lines[i] < 0) {
        contadorNegativos += 1
    }
    // Colocando o "if" e não o "else if" para forçar a passagem da linha por essa condição
    // Putting "if" and not "else if" to force the line to pass through this condition
}

console.log(`${contadorPares} valor(es) par(es)`);
console.log(`${contadorImpares} valor(es) impar(es)`);
console.log(`${contadorPositivos} valor(es) positivo(s)`);
console.log(`${contadorNegativos} valor(es) negativo(s)`);
