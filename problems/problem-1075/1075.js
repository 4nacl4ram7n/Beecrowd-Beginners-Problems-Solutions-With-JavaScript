var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input = Number(input);

let resto;

for (i = 1; i <= 10000; i++) {
  if (i % input == 2) {
    console.log(i);
  }
}
