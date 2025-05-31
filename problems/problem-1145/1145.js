var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);

let colunas = lines[0];
let ultimoNumero = lines[1];
let linha = "";

for (let i = 1; i <= ultimoNumero; i++) {
    linha += i;
    if (i % colunas === 0) {
        console.log(linha);
        linha = "";
    } else {
        linha += " ";
    }
}
if (linha !== "") {
    console.log(linha);
}
