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

let somaLinhas = 0;
let contadorElementos = 0;

for (let i = 7; i <= 11; i++) {
    switch (i) {
        case 7:
            for (j = 5; j <= 6; j++) {
                somaLinhas += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 8:
            for (j = 4; j <= 7; j++) {
                somaLinhas += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 9:
            for (j = 3; j <= 8; j++) {
                somaLinhas += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 10:
            for (j = 2; j <= 9; j++) {
                somaLinhas += matriz[i][j];
                contadorElementos++;
            }
            break;
        case 11:
            for (j = 1; j <= 10; j++) {
                somaLinhas += matriz[i][j];
                contadorElementos++;
            }
            break;
    }
}

if (operacao.trim().toUpperCase() === "S"){
    console.log(somaLinhas.toFixed(1));
}
if (operacao.trim().toUpperCase() === "M"){
    let media = somaLinhas/contadorElementos;
    console.log(media.toFixed(1));
}