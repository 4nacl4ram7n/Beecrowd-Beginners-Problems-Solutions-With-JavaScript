var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let num1, num2;
let menor, maior;
let somaPorLinha;
let sequenciaStr;

for (let i = 0; i < lines.length; i++) {
  somaPorLinha = 0;
  sequenciaStr = "";
  [num1, num2] = lines[i].split(" ").map(Number);
  menor = Math.min(num1, num2);
  maior = Math.max(num1, num2);

  if (menor <= 0 || maior <= 0) {
    break;
  }

  for (let j = menor; j <= maior; j++) {
    somaPorLinha += j;
    sequenciaStr += j + " ";
  }
  console.log(`${sequenciaStr.trim()} Sum=${somaPorLinha}`);
}
