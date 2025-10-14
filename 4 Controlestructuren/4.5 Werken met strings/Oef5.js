const prompt = require("prompt-sync")();

let tekst = prompt("Geef een scheldwoord in: ");

if(tekst.includes("kanker") || tekst.includes("neger") || tekst.includes("hoerenzoon")){
    console.log("Dit is ongepast en niet professioneel.");
}
else{
    console.log("Dit is gepast");
}