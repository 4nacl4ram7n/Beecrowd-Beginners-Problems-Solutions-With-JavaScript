var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let [N1, N2, N3, N4] = (lines[0].split(" ")).map(Number);
let N5 = Number(lines[1]);

let average = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) {
    console.log(`Aluno aprovado.`);
}
if (average < 5.0) {
    console.log(`Aluno reprovado.`)
} else {
    console.log(`Aluno em exame.`);
    console.log(`Nota do exame: ${N5.toFixed(1)}`);
    let finalAverage = (average + N5) / 2
    if (finalAverage >= 5.0) {
        console.log(`Aluno aprovado.`)
        console.log(`Media final: ${finalAverage.toFixed(1)}`);
    } if (finalAverage < 5.0) {
        console.log(`Aluno reprovado.`);
        console.log(`Media final: ${finalAverage.toFixed(1)}`);
    }
}
