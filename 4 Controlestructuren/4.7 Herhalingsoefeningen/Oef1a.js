let prompt = require("prompt-sync")();
let aantal = Number(prompt("Geef het aantal in: "));

let driehoek = "";

for(i = 0; i < aantal; i++){
    driehoek = driehoek + "#";
    console.log(driehoek);
}