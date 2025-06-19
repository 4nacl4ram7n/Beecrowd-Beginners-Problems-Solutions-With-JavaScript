var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let z;

let i = 0;
while (true){
    if (Number(lines[i]) > x){
        z = Number(lines[i]);
        {break}
    } else {
        i ++;
    }
}

let soma = 0;
let numerosNecessarios = 0;
let proximoNum = x;

while (soma <= z){
    soma += proximoNum;
    proximoNum ++;
    numerosNecessarios += 1;
}

console.log(numerosNecessarios);