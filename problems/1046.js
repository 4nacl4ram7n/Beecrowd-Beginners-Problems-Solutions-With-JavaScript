var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(" ").map(Number);
//min = 1h; max = 24h
let duracao; 
let inicial = lines[0];
let final = lines[1];

if (final === inicial) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else if (final > inicial) {
  duracao = final - inicial;
  console.log(`O JOGO DUROU ${duracao} HORA(S)`);
} else if (inicial > final) {
  duracao = 24 - inicial + final;
  console.log(`O JOGO DUROU ${duracao} HORA(S)`);
}
