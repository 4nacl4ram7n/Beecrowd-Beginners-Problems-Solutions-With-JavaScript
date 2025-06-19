var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])

let sum1 = A + B
let sum2 = C + D

if (B > C && D > A && sum2 > sum1 && C > 0 && D > 0 && A % 2 == 0) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}
