// INPUT = 3

// OUTPUT:
// 2 4 6 OK  
// 8 10 12 OK  
// 14 16 18 OK

// A program that reads a number N and prints N lines with 3 even numbers in a row and then the word "OK".

var input = require('fs').readFileSync('stdin', 'utf8');
let N = parseInt(input);

let numeroInicial = 2;

for (i = 0; i < N; i++) {
    let numero1 = numeroInicial;
    let numero2 = numeroInicial + 2;
    let numero3 = numero2 + 2;
    console.log(`${numero1} ${numero2} ${numero3} OK`)

    numeroInicial += 6
}
