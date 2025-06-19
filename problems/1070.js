var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let value = Number(input);
// putting a function on the top is hoisting

function isEven(value) {
    if (value % 2 == 0) {
        return true
    } else {
        return false
    }
}

if (isEven(value) === true) {
    console.log(value + 1);
    value += 1
    console.log(value + 2);
    value += 2
    console.log(value + 2);
    value += 2
    console.log(value + 2);
    value += 2
    console.log(value + 2);
    value += 2
    console.log(value + 2);
} else if (isEven(value) === false) {
    console.log(value);
    value += 2
    console.log(value)
    value += 2
    console.log(value);
    value += 2
    console.log(value);
    value += 2
    console.log(value);
    value += 2
    console.log(value);
}
