var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [value1, value2, value3, value4, value5] = lines.map(Number);

let counterPar = 0;
let counterImpar = 0;
let counterPositivo = 0;
let counterNegative = 0;

if (value1 % 2 == 0) {
    counterPar += 1;
}
if (value2 % 2 == 0) {
    counterPar += 1;
}
if (value3 % 2 == 0) {
    counterPar += 1;
}
if (value4 % 2 == 0) {
    counterPar += 1;
}
if (value5 % 2 == 0) {
    counterPar += 1;
}
// ate aqui ok
if (value1 % 2 != 0) {
    counterImpar += 1;
}
if (value2 % 2 != 0) {
    counterImpar += 1;
}
if (value3 % 2 != 0) {
    counterImpar += 1;
}
if (value4 % 2 != 0) {
    counterImpar += 1;
}
if (value5 % 2 != 0) {
    counterImpar += 1;
}
// ate aqui ok
if (value1 > 0) {
    counterPositivo += 1;
}
if (value2 > 0) {
    counterPositivo += 1;
}
if (value3 > 0) {
    counterPositivo += 1;
}
if (value4 > 0) {
    counterPositivo += 1;
}
if (value5 > 0) {
    counterPositivo += 1;
}
// ate aqui ok
if (value1 < 0) {
    counterNegative += 1;
}
if (value2 < 0) {
    counterNegative += 1;
}
if (value3 < 0) {
    counterNegative += 1;
}
if (value4 < 0) {
    counterNegative += 1;
}
if (value5 < 0) {
    counterNegative += 1;
}

console.log(`${counterPar} valor(es) par(es)`);
console.log(`${counterImpar} valor(es) impar(es)`);
console.log(`${counterPositivo} valor(es) positivo(s)`);
console.log(`${counterNegative} valor(es) negativo(s)`);