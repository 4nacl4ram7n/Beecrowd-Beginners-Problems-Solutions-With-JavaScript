var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);
let contador = 0;
// if input is odd
if (lines[0] % 2 !== 0) {
    for (i = lines[0]; i >= lines[0]; i+= 2) {
        if (lines[0] % 2 !== 0) {
            console.log(i)
            contador++
            if (contador == 6) {
                { break }
            }
        }
    }
} else {
// if input is even
    for (i = lines[0] + 1; i >= lines[0]; i+= 2) {
        console.log(i)
        contador ++
        if (contador == 6) {
            {break}
        }
    }
}
