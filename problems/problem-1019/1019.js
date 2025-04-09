var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let hours = null
let minutes = parseInt(input/60)
let seconds = input%60

if (minutes >=60) {
    hours = parseInt(minutes/60);
    minutes = minutes%60
} else (hours = 0)


console.log(hours + ":" + minutes + ":" + seconds)