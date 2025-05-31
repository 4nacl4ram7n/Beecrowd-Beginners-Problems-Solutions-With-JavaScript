var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(Number);
let n = lines[0]

for (i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i)
    }
}
