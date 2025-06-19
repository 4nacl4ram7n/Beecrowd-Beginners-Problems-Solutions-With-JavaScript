var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let nTestes = Number(lines.shift());
for (i = 0; i < nTestes; i++) {
    let [jogadaSheldon, jogadaRaj] = lines[i].split(" ");
    if (jogadaSheldon === jogadaRaj) {
        console.log(`Caso #${i + 1}: De novo!`); // empatou!
    } else {
        // switch case para todos as possiveis jogadas do sheldon
        switch (jogadaSheldon.trim().toLowerCase()) {
            case "spock":
                if (jogadaRaj.trim().toLowerCase() === "tesoura" || jogadaRaj.trim().toLowerCase() === "pedra") { console.log(`Caso #${i + 1}: Bazinga!`) }
                else { console.log(`Caso #${i + 1}: Raj trapaceou!`) }
                break;
            case "papel":
                if (jogadaRaj.trim().toLowerCase() === "spock" || jogadaRaj.trim().toLowerCase() === "pedra") { console.log(`Caso #${i + 1}: Bazinga!`) }
                else { console.log(`Caso #${i + 1}: Raj trapaceou!`) }
                break;
            case "tesoura":
                if (jogadaRaj.trim().toLowerCase() === "papel" || jogadaRaj.trim().toLowerCase() === "lagarto") { console.log(`Caso #${i + 1}: Bazinga!`) }
                else { console.log(`Caso #${i + 1}: Raj trapaceou!`) }
                break;
            case "pedra":
                if (jogadaRaj.trim().toLowerCase() === "tesoura" || jogadaRaj.trim().toLowerCase() === "lagarto") { console.log(`Caso #${i + 1}: Bazinga!`) }
                else { console.log(`Caso #${i + 1}: Raj trapaceou!`) }
                break;
            case "lagarto":
                if (jogadaRaj.trim().toLowerCase() === "papel" || jogadaRaj.trim().toLowerCase() === "spock") { console.log(`Caso #${i + 1}: Bazinga!`) }
                else { console.log(`Caso #${i + 1}: Raj trapaceou!`) }
                break;
            default:
                break;
        }
    }
}