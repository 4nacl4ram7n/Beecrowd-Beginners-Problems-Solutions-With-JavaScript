var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(Number);

let posicao = 0; let programaRodando = true;
while (programaRodando === true) {
    let notas = [];
    let contador = 0;
    for (let i = posicao; i < lines.length; i++) {
        if (lines[i] >= 0 && lines[i] <= 10) {
            notas.push(lines[i]);
            contador++;
            if (contador == 2) {
                let media = (notas[0] + notas[1]) / 2;
                console.log(`media = ${media.toFixed(2)}`);
                console.log("novo calculo (1-sim 2-nao)")
                posicao = i + 1;
                break;
            }
        } else {
            console.log("nota invalida");
        }
    }
    while (posicao < lines.length) {
        let resposta = lines[posicao];
        if (resposta === 1) {
            posicao++;
            break;
        } else if (resposta === 2) {
            programaRodando = false;
            break;
        } else {
            console.log("novo calculo (1-sim 2-nao)");
            posicao++;
        }
    }
}
