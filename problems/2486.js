var input = require('fs').readFileSync('stdin', 'utf8');
const n = Number(input);

let stringPrint = "Feliz nat";

for (let i = 0; i < n; i ++){
    stringPrint += "a";
}
stringPrint += "l!";

console.log(stringPrint);