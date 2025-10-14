const prompt = require("prompt-sync")();

let getal = prompt("Geef een getal in");

if(getal > 0){
    console.log("Het getal is positief")
}
else if(getal == 0){
    console.log("Null")
}
else{
    console.log("Negatief")
}
