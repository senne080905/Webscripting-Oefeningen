function Fibonacco(n){
    if(n === 1){
        return 1;
    }
    if(n === 0){
        return 0;
    }
    else{
        return Fibonacco(n - 1) + Fibonacco(n - 2);
    }
}
console.log(Fibonacco(6));
    