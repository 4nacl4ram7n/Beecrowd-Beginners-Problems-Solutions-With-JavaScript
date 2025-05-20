// Resolução com manipulação de strings
// Resolution with string manipulations

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numeroDeAlgarismos = Number(input);

let fibonacci = "0 1"; // números fíxos de fibonacci

let atual = 1;
let anterior = 0;
let proximo = 0;

for (i= 0 + 2; i < numeroDeAlgarismos; i++){
    proximo = anterior + atual
    fibonacci += " " + proximo
    anterior = atual
    atual = proximo
}

console.log(fibonacci.trim())
