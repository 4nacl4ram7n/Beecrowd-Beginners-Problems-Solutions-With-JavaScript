var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n").map(Number);

let casos = lines.shift();

function ehPerfeito(n) {
    let somaDivisores = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            somaDivisores += i;
        }
    }
    if (somaDivisores == n){
        return true;
    } else {
        return false;
    }
}

for (let i = 0 ; i < casos; i ++){
    if (ehPerfeito(lines[i])) {
        console.log(`${lines[i]} eh perfeito`);
    } else {
        console.log(`${lines[i]} nao eh perfeito`);
    }
}