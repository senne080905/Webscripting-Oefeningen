let getal = [1, 2, 3, 4, 5];

function KeerOm(getal){
    let nieuwe = [];
    for(let i = getal.length - 1; i >= 0; i--){
        nieuwe.push(getal[i]);
    }
    return nieuwe;
}
let omgekeerd = KeerOm(getal);
console.log(omgekeerd);