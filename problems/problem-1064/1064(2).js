let lines = input.split("\n");

let qtdValoresPositivos = 0;
let somaPositivos = 0;

for (i = 0; i < 6; i++) {
  let valorTestado = Number(lines[i]);
  if (valorTestado > 0) {
    somaPositivos += valorTestado;
    qtdValoresPositivos += 1
  }
}
console.log(`${qtdValoresPositivos} valores positivos`)
console.log((somaPositivos / qtdValoresPositivos).toFixed(1));
