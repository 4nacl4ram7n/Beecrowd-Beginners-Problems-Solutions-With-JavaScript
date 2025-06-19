let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let salario = parseFloat(input);
let imposto = 0.0;

if (salario <= 2000.00) {
    console.log("Isento");
} else {
    if (salario > 2000.00 && salario <= 3000.00) {
        imposto += (salario - 2000.00) * 0.08;
    } else if (salario <= 4500.00) {
        imposto += (1000.00) * 0.08; 
        imposto += (salario - 3000.00) * 0.18;
    } else {
        imposto += (1000.00) * 0.08;
        imposto += (1500.00) * 0.18; 
        imposto += (salario - 4500.00) * 0.28;
    }

    console.log(`R$ ${imposto.toFixed(2)}`);
}
