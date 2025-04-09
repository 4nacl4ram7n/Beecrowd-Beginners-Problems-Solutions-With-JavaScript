var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeroDeCasos = Number(lines.shift());

for (i = 0; i < numeroDeCasos; i += 1) {
    let linhaTestada = lines[i].split(" ").map(Number);
    let [x, y] = linhaTestada;
    if (y === 0) {
        console.log("divisao impossivel");
    } else {
        console.log(performDivision(x, y).toFixed(1));
    }
}

function performDivision(a, b) {
    return a / b
}