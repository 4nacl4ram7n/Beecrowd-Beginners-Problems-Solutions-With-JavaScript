var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
    let linhaDeTeste = lines[i].split(" ").map(Number);
    if (linhaDeTeste[0] > linhaDeTeste[1]) {
        console.log("Decrescente");
    } else if (linhaDeTeste[0] < linhaDeTeste[1]) {
        console.log("Crescente");
    } else if (linhaDeTeste[0] == linhaDeTeste[1]) { break }
}