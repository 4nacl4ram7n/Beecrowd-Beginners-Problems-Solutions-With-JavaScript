var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
    let coordenadaDeTeste = lines[i].split(' ').map(Number);
    let [x, y] = coordenadaDeTeste;
    if (x > 0 && y > 0) {
        console.log("primeiro");
    } else if (x > 0 && y < 0) {
        console.log("quarto");
    } else if (x < 0 && y > 0) {
        console.log("segundo");
    } else if (x < 0 && y < 0) {
        console.log("terceiro");
    } else if (x === 0 || y === 0) {
        { break }
    }
}