var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let indice = 0;

while (true) {
    let inicio = parseInt(lines[indice]);

    if (inicio === 0) {
        break;
    }

    let proximoNum;
    let contador = 0;
    let somaFinal = 0;

    if (inicio % 2 === 0) {
        proximoNum = inicio;
    } else {
        proximoNum = inicio + 1;
    }

    while (contador < 5) {
        somaFinal += proximoNum;
        proximoNum += 2;
        contador++;
    }
    console.log(somaFinal);
    
    indice++;
}