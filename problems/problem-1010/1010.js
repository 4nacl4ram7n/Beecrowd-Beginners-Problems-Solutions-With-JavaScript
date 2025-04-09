var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo1, qtd1, preco1] = lines[0].split(' ').map(Number);
let [codigo2, qtd2, preco2] = lines[1].split(' ').map(Number);

let valorTotal = (qtd1 * preco1) + (qtd2 * preco2);

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);