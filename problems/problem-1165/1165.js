var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n").map(Number);

let cases = lines.shift();

for (let i = 0; i < cases; i++) {
    let num = lines[i];
    let ehPrimo = true;

    if (num < 2) {
        ehPrimo = false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        console.log(`${num} eh primo`);
    } else {
        console.log(`${num} nao eh primo`);
    }
}
