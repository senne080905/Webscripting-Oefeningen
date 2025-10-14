const prompt = require("prompt-sync")();

let tekst = prompt("Geef een tekst in: ");
if(tekst.substring(tekst.length -1) != "."){
    tekst += ".";
    console.log(tekst.toUpperCase());
}
else{
    console.log(tekst.toUpperCase());
}