var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(Number);

let soma = 0;
let x = lines[0];
let y = lines[1];
let menor = Math.min(x, y) + 1;
let maior = Math.max(x, y);


for (i = menor; i < maior; i++) {
     if (i % 2 !== 0){
          soma += i
     }
}
console.log(soma);
