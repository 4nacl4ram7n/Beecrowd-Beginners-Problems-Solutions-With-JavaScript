var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);
// 1074

let numeroDeCasos = lines.shift();
// console.log(numeroDeCasos); console.log(typeof(numeroDeCasos));

for (i = 0; i < numeroDeCasos; i++) {
    let numeroTestado = lines.shift();
    if (numeroTestado === 0) {
        console.log('NULL')
    } else if (numeroTestado % 2 !== 0) {
        if (numeroTestado > 0) {
            console.log(`ODD POSITIVE`);
        } else if (numeroTestado < 0) {
            console.log(`ODD NEGATIVE`);
        }
    } else if (numeroTestado % 2 === 0) {
        if (numeroTestado > 0) {
            console.log(`EVEN POSITIVE`);
        } else if (numeroTestado < 0) {
            console.log(`EVEN NEGATIVE`);
        }
    }
}
