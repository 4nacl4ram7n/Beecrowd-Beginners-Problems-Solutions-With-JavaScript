var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(Number);

let somaDasMedias = 0;
let qtdNotasValidas = 0;

for (i = 0; i < lines.length; i++) {
  let notaTestada = lines[i];
  if (notaTestada >= 0 && notaTestada <= 10) {
    somaDasMedias += lines[i];
    qtdNotasValidas += 1;
    if (qtdNotasValidas === 2){
      {break}
    }
  } else {
    console.log("nota invalida");
  }
}

let media = somaDasMedias / 2;
console.log(`media = ${media.toFixed(2)}`);
