var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n").map(Number);
let numerosPares = []; let contadorPares = 0;
let numerosImpares = []; let contadorImpares = 0;

for (i = 0; i < 15; i++) {
    if (lines[i] % 2 === 0) {
        numerosPares.push(lines[i])
        contadorPares += 1
        if (contadorPares === 5) {
            for (let p = 0; p < numerosPares.length; p++) {
                console.log(`par[${p}] = ${numerosPares[p]}`)
            }
            numerosPares = [];
            contadorPares = 0;
        }
    } else if (lines[i] % 2 !== 0) {
        numerosImpares.push(lines[i])
        contadorImpares += 1
        if (contadorImpares === 5) {
            for (let o = 0; o < numerosImpares.length; o++) {
                console.log(`impar[${o}] = ${numerosImpares[o]}`)
            }
            numerosImpares = [];
            contadorImpares = 0;
        }
    }
}
for (let o = 0; o < numerosImpares.length; o++) {
    console.log(`impar[${o}] = ${numerosImpares[o]}`)
}
for (let p = 0; p < numerosPares.length; p++) {
    console.log(`par[${p}] = ${numerosPares[p]}`)
}
