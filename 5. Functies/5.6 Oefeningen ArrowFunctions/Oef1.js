let isTrue;
const IsVeelvoud = (a, b) => {
    if(a % b == 0){
        isTrue = true;
    }
    else{
        isTrue = false;
    }
}
IsVeelvoud(10, 5);

console.log(isTrue);