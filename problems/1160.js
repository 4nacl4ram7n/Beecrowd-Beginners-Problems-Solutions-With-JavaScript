var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let casosTestes = Number(lines.shift());

for (let i = 0; i < casosTestes; i++) {
    let [pA, pB, g1, g2] = lines[i].split(' ').map(Number);
    
    let anos = 0; // isso é um contador
    while (pA <= pB && anos <= 100){ 
        pA = pA + Math.floor(pA * (g1 / 100.0));
        pB = pB + Math.floor(pB * (g2 / 100.0));
        anos ++
    }
    if (anos > 100){
        console.log(`Mais de 1 seculo.`)
    } else {
        console.log(`${anos} anos.`)
    }
}
