var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = Number(lines[0])
let hours = Number(lines[1])
let salaryPerHour = Number(lines[2])

let result = hours * salaryPerHour


console.log("NUMBER = " + number)
console.log("SALARY = U$ " + result.toFixed(2))