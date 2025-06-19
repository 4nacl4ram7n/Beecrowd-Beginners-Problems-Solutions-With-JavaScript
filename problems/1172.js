var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const valores = input.trim().split('\n').map(Number);

let x = valores;

for (i = 0; i < x.length; i++){
    if (x[i] <= 0){
        x[i] = 1
    }
    console.log(`X[${i}] = ${x[i]}`)
}
