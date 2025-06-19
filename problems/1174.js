var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n').map(Number);


for (i = 0; i < 100; i++){
    if (valores[i] <= 10) {
        console.log(`A[${i}] = ${valores[i].toFixed(1)}`)
    }
}
