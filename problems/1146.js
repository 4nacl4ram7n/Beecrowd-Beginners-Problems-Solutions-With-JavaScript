var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let stringPrint = ""

let i = 0;
while (i < lines.length) {
    let n = Number(lines[i]);
    if (n !== 0){
        stringPrint = ""
        for (let j = 1; j <= n; j++){
            stringPrint += j + " "
        }
    } else {
        break
    }
    
    i += 1
    console.log(stringPrint.trim())
}
