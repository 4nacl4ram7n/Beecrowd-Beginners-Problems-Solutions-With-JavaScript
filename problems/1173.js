var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const primeiro_numero = Number(input);

if (primeiro_numero <= 50 && primeiro_numero >= 1) {
    let n = [primeiro_numero]
    for (let i = 1; i < 10; i++) {
        n.push(n[i - 1] * 2);
    }

    for (j = 0; j < n.length; j++) {
        console.log(`N[${j}] = ${n[j]}`)
    }
}
