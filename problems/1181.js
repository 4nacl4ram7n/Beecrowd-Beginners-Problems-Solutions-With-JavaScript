const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const L = parseInt(lines[0]);
const T = lines[1];

let matriz = [];
let index = 2;

for (let i = 0; i < 12; i++) {
    let linha = [];
    for (let j = 0; j < 12; j++) {
        linha.push(parseFloat(lines[index]));
        index++;
    }
    matriz.push(linha);
}

let soma = 0;
for (let j = 0; j < 12; j++) {
    soma += matriz[L][j];
}

if (T === 'S') {
    console.log(soma.toFixed(1));
} else if (T === 'M') {
    const media = soma / 12;
    console.log(media.toFixed(1));
}
