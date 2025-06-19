var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?
// 1/1  ->  1+2/1*2  ->  3+2/2*2

let S = 0;
let numeradores = [];
let denominadores = [1];

for (i = 1; i <= 39; i += 2) {
    numeradores.push(i);
}

for (j = 0; j < 19; j++) {
    denominadores.push(denominadores[j] * 2);
}

for (k = 0; k < 20; k ++){
    S += (numeradores[k]/denominadores[k]);
}

console.log(S.toFixed(2));
