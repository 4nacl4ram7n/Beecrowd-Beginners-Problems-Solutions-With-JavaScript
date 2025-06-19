var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value1 = lines.shift().trim();
value1 = Number(value1);
let value2 = lines.shift().trim();
value2 = Number(value2);
let value3 = lines.shift().trim();
value3 = Number(value3);
let value4 = lines.shift().trim();
value4 = Number(value4);
let value5 = lines.shift().trim();
value5 = Number(value5);
let value6 = lines.shift().trim();
value6 = Number(value6);

let counter = 0

let positivo1 = 0;
let positivo2 = 0;
let positivo3 = 0;
let positivo4 = 0;
let positivo5 = 0;
let positivo6 = 0;

if (value1 > 0.0) {
    counter += 1
    positivo1 = value1
} // ok

if (value2 > 0.0) {
    counter += 1
    positivo2 = value2
} // ok

if (value3 > 0.0) {
    counter += 1
    positivo3 = value3
} //ok

if (value4 > 0.0) {
    counter += 1
    positivo4 = value4
} //ok

if (value5 > 0.0) {
    counter += 1
    positivo5 = value5
} // ok

if (value6 > 0.0) {
    counter += 1
    positivo6 = value6
}// ok

let media = (positivo1 + positivo2 + positivo3 + positivo4 + positivo5 + positivo6) / counter

console.log(`${counter} valores positivos`)
console.log(media.toFixed(1));
