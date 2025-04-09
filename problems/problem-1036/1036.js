var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let delta = b * b - 4 * a * c


if (a != 0 && delta > -1) {
    let root1 = (-b + Math.sqrt(delta)) / (2 * a)
    let root2 = (-b - Math.sqrt(delta)) / (2 * a)

    console.log("R1 = " + root1.toFixed(5))
    console.log("R2 = " + root2.toFixed(5))

} else {
    console.log("Impossivel calcular")
}