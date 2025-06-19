const input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor1 = Number(input)


let notasDeCem = parseInt(valor1 / 100)
console.log(`${notasDeCem} nota(s) de R$ 100,00`)
let valor2 = valor1 % 100
let notasDeCinquenta = parseInt(valor2 / 50)
console.log(`${notasDeCinquenta} nota(s) de R$ 50,00`)
let valor3 = valor2 % 50
let notasDeVinte = parseInt(valor3 / 20)
console.log(`${notasDeVinte} nota(s) de R$ 20,00`)
let valor4 = valor3 % 20
let notasDeDez = parseInt(valor4 / 10)
console.log(`${notasDeDez} nota(s) de R$ 10,00`)
let valor5 = valor4 % 10
let notasDeCinco = parseInt(valor5 / 5)
console.log(`${notasDeCinco} nota(s) de R$ 5,00`)
let valor6 = valor5 % 5
let notasDeDois = parseInt(valor6 / 2)
console.log(`${notasDeDois} nota(s) de R$ 2,00`)
let valor7 = parseInt(valor6 % 2)
let notasDeUm = parseInt(valor7 / 1)
console.log(`${notasDeUm} nota(s) de R$ 1,00`)

