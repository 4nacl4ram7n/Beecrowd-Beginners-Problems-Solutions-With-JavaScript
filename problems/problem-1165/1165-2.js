var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

let numeroTestes = lines.shift();

function ehPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < numeroTestes; i++) {
    let numero = lines[i];
    let resultado = ehPrimo(numero);

    if (resultado) {
        console.log(`${numero} eh primo`);
    } else {
        console.log(`${numero} nao eh primo`);
    }
}
