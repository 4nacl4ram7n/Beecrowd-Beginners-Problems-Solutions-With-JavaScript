var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n'); 

let soma = 0;
let contador = 0;
let indice = 0; 

while (true) {
    let idade = parseInt(lines[indice]); 
    if (idade >= 0) { 
        soma += idade;
        contador++;
    } else { 
        break; 
    }
    indice++; 
}
let media = soma / contador; 
console.log(media.toFixed(2));