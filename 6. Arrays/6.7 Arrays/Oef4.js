let getal = [1, 2, 3, 4];

function verdubbel(getal){
    let doubled = getal.map(function(getal){
        return getal * 2;
    });
    return doubled;
}
let verdubbeld = verdubbel(getal);
console.log(verdubbeld);