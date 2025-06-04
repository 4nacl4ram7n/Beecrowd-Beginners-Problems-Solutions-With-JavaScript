var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let counterAlcohol = 0
let counterGas = 0
let counterDiesel = 0

let i = 0;

while(true){
    if (lines[i] == 1){
        counterAlcohol += 1
    } else if (lines[i] == 2){
        counterGas += 1
    } else if (lines[i] == 3){
        counterDiesel += 1
    } else if (lines[i] == 4){
        break;
    }
    i ++
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${counterAlcohol}`);
console.log(`Gasolina: ${counterGas}`);
console.log(`Diesel: ${counterDiesel}`);
