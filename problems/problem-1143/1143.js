var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numero = parseInt(input);

for (i = 1; i <= numero; i++) {
    let quadrado = i ** 2
    let cubo = i ** 3
    console.log(`${i} ${quadrado} ${cubo}`)
}
