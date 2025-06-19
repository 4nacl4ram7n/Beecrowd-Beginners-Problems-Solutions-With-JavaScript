var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);

let A = Number(lines.shift());
let N = 0;
let i = 0;
while (i < lines.length) {
    if (lines[i] > 0) {
        N = lines[i];
    }
    i++
}

let consecutivos = []
let numero = A
consecutivos.push(A)

let contador = 1
while (contador < N){
    numero = numero + 1
    contador ++
    consecutivos.push(numero)
}

let soma = 0
for (let j = 0; j < consecutivos.length; j++){
    soma += consecutivos[j]
}

console.log(soma)