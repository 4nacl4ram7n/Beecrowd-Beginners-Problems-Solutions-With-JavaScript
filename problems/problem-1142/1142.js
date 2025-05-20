var input = require('fs').readFileSync('stdin', 'utf8');
let N = parseInt(input); 
let contador = 1;

for (let i = 0; i < N; i++) {
    let a = contador;
    let b = contador + 1;
    let c = contador + 2;
    console.log(`${a} ${b} ${c} PUM`);
    contador += 4;
}
