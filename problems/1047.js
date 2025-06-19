let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [hinicial, minicial, hfinal, mfinal] = input.split(" ").map(Number);

let inicio = hinicial * 60 + minicial;
let final = hfinal * 60 + mfinal;
let horas;
let minutos;
let duracao;

if (final > inicio) {
  duracao = final - inicio;
  horas = parseInt(duracao / 60);
  minutos = duracao % 60;
} else if (inicio > final) {
  duracao = (24 * 60 - inicio) + final;
  horas = parseInt(duracao / 60);
  minutos = duracao % 60;
} else if (inicio === final){
  duracao = 24*60;
  horas = 24;
  minutos = 0;
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
