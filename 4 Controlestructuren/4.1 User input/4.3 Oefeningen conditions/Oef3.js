const prompt = require("prompt-sync")();

let score1 = prompt("Geef een getal in");
let score2 = prompt("Geef een getal in");

if(score1 > 50 && score2 > 50){
    console.log("Beide scores zijn goed")
}
else if(score1 > 50 || score2 < 50){
    console.log("Een score is goed")
}
else{
    console.log("Beide scores zijn slecht")
}