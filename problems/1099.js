var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n");
let numeroDeCasos = Number(lines.shift());

for (i = 0; i < numeroDeCasos; i++){
  let [numero1, numero2] = lines[i].split(" ").map(Number);
  let inicio = Math.min(numero1, numero2);
  let final = Math.max(numero1, numero2);
  let soma = 0;
  for (let j = inicio + 1; j < final; j++) {
    if (j % 2 !== 0){
      soma += j
    }
  }
  console.log (soma);
}
