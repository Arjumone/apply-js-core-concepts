// 1 * 2 * 3 * 4 * 5 * 6 * 7

function multiplicatinOfNumber(numbers){
    let multi = 1;
    for( let i = 0; i <= numbers; i++){
        multi = multi * i
    }
    return multi;
}
const result = multiplicatinOfNumber(7);
console.log(result);