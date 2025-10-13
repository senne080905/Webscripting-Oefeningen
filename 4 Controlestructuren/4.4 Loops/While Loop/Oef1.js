const prompt = require("prompt-sync")();

let getal = number(prompt("Geef een getal in: "));
let som=0;

while(getal > 0){
    som = som + getal;
    getal = number(prompt("Geef een getal in: "));
}

console.log(som);