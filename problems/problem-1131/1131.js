var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n");

let vitoriasInter = 0;
let vitoriasGremio = 0;
let empates = 0;
let totalGrenais = 0;
let i = 0;


while (true) {
    if (lines.length - i < 2 || lines[i].trim() === '') {
        break; 
    }
    let placarString = lines[i]; 
    let [golsInter, golsGremio] = placarString.split(" ").map(Number);
    totalGrenais++; 

    if (golsInter > golsGremio) {
        vitoriasInter++;
    } else if (golsGremio > golsInter) {
        vitoriasGremio++;
    } else {
        empates++;
    }

    let opcao = Number(lines[i + 1]); 
    
    console.log("Novo grenal (1-sim 2-nao)");

    i += 2;
    if (opcao === 2) {
        break; 
    }
}

let vencedorFinal = "";

if (vitoriasInter > vitoriasGremio) {
    vencedorFinal = "Inter venceu mais";
} else if (vitoriasGremio > vitoriasInter) {
    vencedorFinal = "Gremio venceu mais";
} else { // Se as vitórias forem iguais
    vencedorFinal = "Nao houve vencedor";
}

console.log(`${totalGrenais} grenais`);
console.log(`Inter:${vitoriasInter}`);
console.log(`Gremio:${vitoriasGremio}`);
console.log(`Empates:${empates}`);
console.log(`${vencedorFinal}`);
