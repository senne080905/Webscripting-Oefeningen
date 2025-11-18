let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];

function combineerEnManipuleer(array1, array2){
    let combi = array1.concat(array2);
    combi.push(8);
    combi.unshift(-1);
    combi.sort();
}
