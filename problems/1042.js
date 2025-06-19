var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [a, b, c] = input.split(' ').map(Number);

if (a < b && a < c) {
    console.log(Math.min(a, b, c))
    console.log(Math.min(b, c))
    console.log(Math.max(b, c))
    console.log("")
    console.log(a)
    console.log(b)
    console.log(c)
} else if (b < a && b < c) {
    console.log(Math.min(a, b, c))
    console.log(Math.min(a, c))
    console.log(Math.max(a, c))
    console.log("")
    console.log(a)
    console.log(b)
    console.log(c)
} else {
    console.log(Math.min(a, b, c))
    console.log(Math.min(a, b))
    console.log(Math.max(a, b))
    console.log("")
    console.log(a)
    console.log(b)
    console.log(c)
}