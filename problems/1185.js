var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let operacao = lines.shift().trim();
let matriz = [];
let contador = 0;

for (let i = 0; i < 12; i++) {
    let linha = [];
    for (let j = 0; j < 12; j++) {
        linha.push(Number(lines[contador]));
        contador++;
    }
    matriz.push(linha);
}

let soma = 0;
let count = 0;

// linha secundaria eh i + j = 11 (ordem - 1)

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++){
        if (i + j < 11){
            soma += matriz[i][j];
            count ++;
        }
    }
}

if (operacao.trim().toUpperCase() == "S") {
    console.log(soma.toFixed(1));
} else if (operacao.trim().toUpperCase() == "M") {
    let media = soma / count;
    console.log(media.toFixed(1));
}