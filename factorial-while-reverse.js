function factorial(number){
    let i = 7;
    let result = 1;
    while(i >= number){
        result =result * i;
        i--;
    }
    return result;
}
const result = factorial(7);
console.log(result);