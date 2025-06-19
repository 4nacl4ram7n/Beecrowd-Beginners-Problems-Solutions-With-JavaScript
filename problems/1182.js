var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let colunaPedida = Number(lines.shift());
let operacao = lines.shift().trim();
let matriz = [];
let contador = 0;

for (let i = 0; i < 12; i++) {
    let linha = [];
    for (let j = 0; j < 12; j++) {
        linha.push(Number(lines[contador]));
        contador ++;
    }
    matriz.push(linha);
}

let somaColuna = 0;
for (let i = 0 ; i < 12; i++){
    somaColuna += matriz[i][colunaPedida];
}

if (operacao.trim().toUpperCase() == "S") {
    console.log(somaColuna.toFixed(1));
} else if (operacao.trim().toUpperCase() == "M") {
    let media = somaColuna / 12;
    console.log(media.toFixed(1));
}
