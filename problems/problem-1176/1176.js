var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n");
let fib = [0, 1];
let nTestes = Number(lines.shift());

for (j = 2; j <= 60; j++) {
    fib[j] = fib[j - 1] + fib[j - 2];
}

for (i = 0; i < nTestes; i++) {
    let enesimoN = Number(lines[i]);
    console.log(`Fib(${enesimoN}) = ${fib[enesimoN]}`);
}
