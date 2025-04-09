/*
    vertebrado - ave - carnivoro - aguia
    vertebrado - ave - onivoro - pomba

    vertebrado - mamifero - onivoro - homem
    vertebrado - mamifero - herbivoro - vaca
*/
/*
    invertebrado - inseto - hematofago - pulga
    invertebrado - inseto - herbivoro - lagarta

    invertebrado - anelideo - hematofago - sanguessuga 
    invertebrado - anelideo - onivoro - minhoca 
*/

var input = require('fs').readFileSync('/dev/input', 'utf8');
var lines = input.split('\n');

lines = ["invertebrado", "anelideo", "onivoro"]



let tipo1 = String(lines[0])
let tipo2 = String(lines[1])
let tipo3 = String(lines[2])


if (tipo1 === "vertebrado") {
    if (tipo2 === "ave") {
        if (tipo3 === "carnivoro") {
            console.log("aguia")
        } else if (tipo3 == "onivoro") {
            console.log("pomba")
        }
    } else if (tipo2 === "mamifero") {
        if (tipo3 === "onivoro") {
            console.log("homem")
        } else if (tipo3 === "herbivoro") {
            console.log("vaca")
        }
    }

} else if (tipo1 === "invertebrado") {
    if (tipo2 === "inseto") {
        if (tipo3 === "hematofago") {
            console.log("pulga")
        } else if (tipo3 === "herbivoro") {
            console.log("lagarta")
        }
    } else if (tipo2 === "anelideo") {
        if (tipo3 === "hematofago") {
            console.log("sanguessuga")
        } else if (tipo3 === "onivoro") {
            console.log("minhoca")
        }
    }
}