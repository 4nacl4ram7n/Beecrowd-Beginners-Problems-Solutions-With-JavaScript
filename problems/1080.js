var input = require('fs').readFileSync('/dev/stdin', 'utf8');
lines = input.split("\n").map(Number);
let maiorValor = -Infinity;
let posicao = 0;

for (i = 0; i < 100; i++) {
  if (lines[i] > maiorValor) {
    maiorValor = lines[i];
    posicao = i;
  }
}
console.log(maiorValor);
console.log(posicao + 1);
