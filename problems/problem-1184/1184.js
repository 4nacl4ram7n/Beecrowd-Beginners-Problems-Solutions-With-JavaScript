var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let operacao = String(lines.shift());
lines = lines.map(Number);
let matriz = []
let posicao = 0;

for (let i = 0; i < 12; i++) {
    let linha = []
    for (let j = 0; j < 12; j++) {
        linha.push(lines[posicao]);
        posicao++
    }
    matriz.push(linha)
}

let termosAbaixo = [];

for (let l = 0; l < 12; l++) {
    for (let c = 0; c < 12; c++) {
        if (l > c) {
            termosAbaixo.push(matriz[l][c]);
        }
    }
}

let somaTotal = 0;

if (operacao.trim().toUpperCase() === "S") {
    for (let k = 0; k < termosAbaixo.length; k++) {
        somaTotal += termosAbaixo[k]
    }
    console.log(somaTotal.toFixed(1));
} else if (operacao.trim().toUpperCase() === "M") {
    for (let k = 0; k < termosAbaixo.length; k++) {
        somaTotal += termosAbaixo[k]
    }
    let media = somaTotal / termosAbaixo.length;
    console.log(media.toFixed(1));
}
