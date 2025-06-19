const input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = Number(input);
console.log(valor); // remove later

let notasDeCem = parseInt(valor / 100); valor = (valor % 100).toFixed(2);
let notasDeCinq = parseInt(valor / 50); valor = (valor % 50).toFixed(2);
let notasDeVinte = parseInt(valor / 20); valor = (valor % 20).toFixed(2);
let notasDeDez = parseInt(valor / 10); valor = (valor % 10).toFixed(2);
let notasDeCinco = parseInt(valor / 5); valor = (valor % 5).toFixed(2);
let notasDeDois = parseInt(valor / 2); valor = (valor % 2).toFixed(2);
let moedas1 = parseInt(valor / 1); valor = (valor % 1).toFixed(2);
let moedas050 = parseInt(valor / 0.5); valor = (valor % 0.5).toFixed(2);
let moedas025 = parseInt(valor / 0.25); valor = (valor % 0.25).toFixed(2);
let moedas010 = parseInt(valor / 0.10); valor = (valor % 0.10).toFixed(2);
let moedas005 = parseInt(valor / 0.05); valor = (valor % 0.05).toFixed(2);
let moedas001 = parseInt(valor / 0.01); valor = (valor % 0.01).toFixed(2);

console.log(`NOTAS:`);
console.log(`${notasDeCem} nota(s) de R$ 100.00`);
console.log(`${notasDeCinq} nota(s) de R$ 50.00`);
console.log(`${notasDeVinte} nota(s) de R$ 20.00`);
console.log(`${notasDeDez} nota(s) de R$ 10.00`);
console.log(`${notasDeCinco} nota(s) de R$ 5.00`);
console.log(`${notasDeDois} nota(s) de R$ 2.00`);

console.log(`MOEDAS:`);
console.log(`${moedas1} moeda(s) de R$ 1.00`);
console.log(`${moedas050} moeda(s) de R$ 0.50`);
console.log(`${moedas025} moeda(s) de R$ 0.25`);
console.log(`${moedas010} moeda(s) de R$ 0.10`);
console.log(`${moedas005} moeda(s) de R$ 0.05`);
console.log(`${moedas001} moeda(s) de R$ 0.01`);
