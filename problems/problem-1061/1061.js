let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

let diaInicio = parseInt(input[0].split(' ')[1]);
let [hInicio, mInicio, sInicio] = input[1].split(' : ').map(Number);

let diaFim = parseInt(input[2].split(' ')[1]);
let [hFim, mFim, sFim] = input[3].split(' : ').map(Number);

let inicioSeg = (diaInicio * 86400) + (hInicio * 3600) + (mInicio * 60) + sInicio;
let fimSeg = (diaFim * 86400) + (hFim * 3600) + (mFim * 60) + sFim;

let duracao = fimSeg - inicioSeg;

let dias = Math.floor(duracao / 86400);
duracao %= 86400;

let horas = Math.floor(duracao / 3600);
duracao %= 3600;

let minutos = Math.floor(duracao / 60);
let segundos = duracao % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
