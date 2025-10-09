const prompt = require("prompt-sync");

let leeftijd =Number(prompt("Geef je leeftijd in!"));
if (!Number.isNaN(leeftijd)) {
 console.log("Volgend jaar ben je " + (leeftijd + 1) + " jaar oud.");
}
