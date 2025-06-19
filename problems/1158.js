var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let nTestes = Number(lines.shift());
let numeroInicial, quantidadeIncrem;
let soma, contador, proximoImpar;

for (i = 0; i < nTestes; i++) {
    [numeroInicial, quantidadeIncrem] = lines[i].split(" ").map(Number);
    soma = 0;
    contador = 0;
    if (numeroInicial % 2 === 0) {
        proximoImpar = numeroInicial + 1;
    } else {
        proximoImpar = numeroInicial;
    }

    while (contador < quantidadeIncrem) {
        soma += proximoImpar;
        contador ++;
        proximoImpar += 2;
    }
    console.log(soma);
}
