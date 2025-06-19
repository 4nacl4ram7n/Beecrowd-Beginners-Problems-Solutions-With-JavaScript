var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let matriz = [];
let operacao = lines.shift().trim();
let posicaoNaMatriz = 0;

for (i = 0; i < 12; i++) {
    let linha = [];
    for (j = 0; j < 12; j++) {
        linha.push(Number(lines[posicaoNaMatriz]));
        posicaoNaMatriz++;
    }
    matriz.push(linha);
}

let soma = 0;
let contadorElementos = 0;

for (let j = 7; j <= 11; j++) {
    switch (j) {
        case 11:
            for (let i = 1; i <= 10; i++) {
                soma += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 10:
            for (let i = 2; i <= 9; i++) {
                soma += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 9:
            for (let i = 3; i <= 8; i++) {
                soma += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 8:
            for (let i = 4; i <= 7; i++) {
                soma += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 7:
            for (let i = 5; i <= 6; i++) {
                soma += matriz[i][j];
                contadorElementos++;
            }
            break;
    }
}

if (operacao.trim().toUpperCase() === "S") {
    console.log(soma.toFixed(1));
}
if (operacao.trim().toUpperCase() === "M") {
    let media = soma / contadorElementos;
    console.log(media.toFixed(1));
}