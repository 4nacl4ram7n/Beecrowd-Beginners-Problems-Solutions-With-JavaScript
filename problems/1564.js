var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

for(let i = 0; i < lines.length; i++){
    let reclamacao = Number(lines[i]);
    if(reclamacao === 0){
        console.log("vai ter copa!");
    } else {
        console.log("vai ter duas!");
    }
}
