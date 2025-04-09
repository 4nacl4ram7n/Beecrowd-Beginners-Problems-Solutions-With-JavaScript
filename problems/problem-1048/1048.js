var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var salary = Number(input)

/*
0 - 400.00                      15
400.01 - 800.00                 12
800.01 - 1200.00                10
1200.01 - 2000.00               7
Above 2000.00                   4
*/

if (salary >= 0 && salary <= 400.00) {
    let reajustment = 0.15 * salary
    let newSalary = salary + reajustment
    console.log(`Novo salario: ${newSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`);
    console.log(`Em percentual: 15 %`);
} else if (salary >= 400.01 && salary <= 800.00) {
    let reajustment = 0.12 * salary
    let newSalary = salary + reajustment
    console.log(`Novo salario: ${newSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`);
    console.log(`Em percentual: 12 %`);
} else if (salary >= 800.01 && salary <= 1200.00) {
    let reajustment = 0.10 * salary
    let newSalary = salary + reajustment
    console.log(`Novo salario: ${newSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`);
    console.log(`Em percentual: 10 %`);
} else if (salary >= 1200.01 && salary <= 2000.00) {
    let reajustment = 0.07 * salary
    let newSalary = salary + reajustment
    console.log(`Novo salario: ${newSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`);
    console.log(`Em percentual: 7 %`);
} else if (salary > 2000.00) {
    let reajustment = 0.04 * salary
    let newSalary = salary + reajustment
    console.log(`Novo salario: ${newSalary.toFixed(2)}`);
    console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`);
    console.log(`Em percentual: 4 %`);
}