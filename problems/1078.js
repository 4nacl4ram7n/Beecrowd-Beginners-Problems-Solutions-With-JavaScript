var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let value = Number(input);

function multiply(a, b) {
    return a * b
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${value} = ${multiply(i, value)}`)
}
