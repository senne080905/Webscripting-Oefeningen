const prompt = require("prompt-sync")();

let jaar = prompt("Geef het jaar in: ");
let maand = prompt("Geef de maand in: ");

if(maand == 2){
    if((jaar % 4 == 0 && jaar %100 != 0) || jaar %400 == 0){
        console.log("Februari in een schrikkeljaar");
    }
    else{
        console.log("Februari in een normaal jaar");
    }
}
else{
    console.log("Geen Februari");
}