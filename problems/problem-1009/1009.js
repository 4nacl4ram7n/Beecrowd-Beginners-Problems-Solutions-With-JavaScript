var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = (lines[0])
let fixedSalary = Number(lines[1])
let sold = Number(lines[2])

let result = 0.15 * sold + fixedSalary


console.log("TOTAL = R$ " + result.toFixed(2))