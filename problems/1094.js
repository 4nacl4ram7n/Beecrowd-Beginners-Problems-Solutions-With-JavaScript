var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeroDeTestes = parseInt(lines.shift().trim());
let totalC = 0;
let totalR = 0;
let totalS = 0;

for (let i = 0; i < numeroDeTestes; i++) {
    const linhaParaAnalise = lines[i].trim();
    const [numeroStr, animal] = linhaParaAnalise.split(" ");
    const numero = parseInt(numeroStr);

    if (animal === "C") {
        totalC += numero;
    } else if (animal === "R") {
        totalR += numero;
    } else if (animal === "S") {
        totalS += numero;
    }
}
const totalDeCobaias = totalC + totalR + totalS;
const percentualC = ((totalC / totalDeCobaias) * 100).toFixed(2);
const percentualR = ((totalR / totalDeCobaias) * 100).toFixed(2);
const percentualS = ((totalS / totalDeCobaias) * 100).toFixed(2);

console.log(`Total: ${totalDeCobaias} cobaias`);
console.log(`Total de coelhos: ${totalC}`);
console.log(`Total de ratos: ${totalR}`);
console.log(`Total de sapos: ${totalS}`);
console.log(`Percentual de coelhos: ${percentualC} %`);
console.log(`Percentual de ratos: ${percentualR} %`);
console.log(`Percentual de sapos: ${percentualS} %`);