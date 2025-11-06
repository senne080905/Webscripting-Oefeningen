function MaakTeller() {
    let count;
    return function() {
        count++;
        return count;
    }
}
let mijnTeller = MaakTeller();
console.log(mijnTeller());
