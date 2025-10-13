const prompt = require("prompt-sync")();

let start = number(prompt("Geef een start getal in"));
let eind = number(prompt("Geef een eind getal in"));

for(i = start; i <= eind; i++){
    if(i %2 == 0){
        console.log(i);
    }
}