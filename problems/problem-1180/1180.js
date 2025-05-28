var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n");
 
const tamanhoVetor = Number(lines.shift());
let vetor = [];
let numeros = lines[0].split(" ")
let menor = Number(numeros[0]);
let posicao = 0;

for (i = 0; i < tamanhoVetor; i++){
    vetor.push(Number(numeros[i]))
    if (numeros[i] < menor){
        menor = Number(numeros[i])
        posicao = i
    }
}
console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${posicao}`);
