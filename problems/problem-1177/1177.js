var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numeroLido = Number(input);

let vetorN = [];

for (i = 0; i < 1000; i ++){
    for (j = 0; j <= numeroLido - 1; j++){
        vetorN.push(j);
    }
    console.log(`N[${i}] = ${vetorN[i]}`);
}
