var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

for (i = 1; i <= lines[0]; i ++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
