let prompt = require("prompt-sync")();
let aantal = Number(prompt("Geef het aantal in: "));


for(let i = 1; i <= aantal; i++){
    let line = " ";

    for(let j = 1; j <= aantal - i; j++){
        line = line + " ";
    }
    for( let k=1; k <= i; k++){
        line = line + "#";
    }
console.log(line);
}