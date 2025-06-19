var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let years = (lines[0]/365);
let months = ((lines[0]%365)/30);
let days = (lines[0]%365)%30


console.log(parseInt(years) + " ano(s)");
console.log(parseInt(months) + " mes(es)");
console.log(days + " dia(s)");
