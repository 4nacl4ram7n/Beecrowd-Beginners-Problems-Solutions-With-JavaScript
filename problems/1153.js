var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const n = Number(input)

let termosFatorial = [];
let multiplicacaoProg = 1

for (i = n; i >= 1; i--) {
    let termoFatorial = i
    termosFatorial.push(termoFatorial)
}

for (j = 0; j < termosFatorial.length; j++){
    multiplicacaoProg = multiplicacaoProg * termosFatorial[j]
}

console.log(multiplicacaoProg)