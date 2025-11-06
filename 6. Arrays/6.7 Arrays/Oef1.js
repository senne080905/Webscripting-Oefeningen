let getallen = [2, 6, 78, 2, 8];
function dubbeleVerwijderen(getal){
    let nieuweGetallen = [];
    getallen.forEach(x =>{
    if(nieuweGetallen.indexOf(x) == -1){
        nieuweGetallen.push(x);
    }
});
return nieuweGetallen;
}
let nieuwe = dubbeleVerwijderen(getallen);
console.log(nieuwe);
