var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let saida = Number(lines.shift());
let tempoViagem = Number(lines.shift());
let fuso = Number(lines.shift());

if (saida === 0) {
    saida = 24
}

let horaChegada = saida + tempoViagem + fuso

while (horaChegada >= 24) {
    horaChegada = horaChegada - 24
}

if (horaChegada < 0) {
    horaChegada = horaChegada + 24
}

console.log(horaChegada)