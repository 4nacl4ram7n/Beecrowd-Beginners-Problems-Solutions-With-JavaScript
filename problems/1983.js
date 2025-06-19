var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nTestes = Number(lines.shift());
let matriculaMaiorPont = 0; let maiorPontuacaoParcial = 0;

for (i = 0; i < nTestes; i++) {
    let [matricula, pontuacao] = lines[i].split(" ").map(Number);
    if (maiorPontuacaoParcial < pontuacao) {
        if (pontuacao >= 8) {
            maiorPontuacaoParcial = pontuacao
            matriculaMaiorPont = matricula
        }
    }
}

if (maiorPontuacaoParcial < 8){
    console.log("Minimum note not reached")
} else {
    console.log(matriculaMaiorPont)
}