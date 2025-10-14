const prompt = require("prompt-sync")();

let tekst = prompt("Geef een tekst in: ");

for(i = 0; i <= 1; i++){
    let nieuwetekst = tekst.replace("is" , "was");
    console.log(nieuwetekst);
}