var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const numeroLido  = Number(lines[0]);
let string = "";
let vetor = [];

for (i = 0; i < numeroLido; i ++){
    vetor.push("Ho")
}

string = vetor.join(" ")
console.log(string + "!");
