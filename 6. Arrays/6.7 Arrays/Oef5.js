let zinnen = ["Hallo", "wereld", "dit", "is", "een", "test"];

function eersteEnLaatste(zinnen){
    let eersteLaatste = [];
    eersteLaatste.push(zinnen[0]);
    eersteLaatste.push(zinnen[zinnen.length - 1]);
    return eersteLaatste;
}
let resultaat = eersteEnLaatste(zinnen);
console.log(resultaat);