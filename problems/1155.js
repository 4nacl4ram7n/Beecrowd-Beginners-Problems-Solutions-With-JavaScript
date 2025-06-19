let numeradores = [];
let denominadores = [];

while (numeradores.length < 100) {
    numeradores.push(1);
}

let i = 0;
while (denominadores.length < 100) {
    denominadores.push(i + 1);
    i++;
}

let soma = 0;
for (let k = 0; k < 100; k++) {
    soma += (numeradores[k])/(denominadores[k]);
}

console.log(soma.toFixed(2));