var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let intervalo = input.split("\n").map(Number);

let min = Math.min(intervalo[0], intervalo[1]);
let max = Math.max(intervalo[0], intervalo[1]);

for (i = min + 1; i < max; i ++){
    if (i % 5 == 2 || i % 5 == 3){
        console.log(i)
    }
}
