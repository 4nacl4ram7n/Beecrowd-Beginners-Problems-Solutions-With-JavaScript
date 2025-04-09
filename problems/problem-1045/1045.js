var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = lines.shift();
a = Number(a);
let b = lines.shift();
b = Number(b);
let c = lines.shift();
c = Number(c);

if (b > a) {
    [b, a] = [a, b]
}
if (c > b) {
    [c, b] = [b, c]
}
if (b > a) {
    [b, a] = [a, b]
}
// console.log(a, b, c) // tudo ok ate aqui

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO")
} else {
    if (Math.pow(a, 2) == (Math.pow(b, 2) + Math.pow(c, 2))) {
        console.log("TRIANGULO RETANGULO")
    } else if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))) {
        console.log("TRIANGULO OBTUSANGULO")
    } else if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))) {
        console.log("TRIANGULO ACUTANGULO")
    }

    if (a == b && a == c) {
        console.log("TRIANGULO EQUILATERO")
    } else if (a == b || b == c || a == c) {
        console.log("TRIANGULO ISOSCELES")
    }
}