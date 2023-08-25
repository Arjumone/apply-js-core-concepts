function getSum(array){
    // console.log(array);
    let sum = 0
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;

}

const myArray = [ 23, 45, 86, 83, 53];
const myArraySum = getSum(myArray);
console.log(myArraySum);


function getOddNumbers(numbers){
    const oddNumber = [];
    for(let i = 0; i < numbers.length; i++){
        // console.log(i);
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index,element);
            oddNumber.push(element);
        }  
    }
    return oddNumber;
}
const myNumbers = [12, 87, 45, 98, 40, 86];
const oddNumber = getOddNumbers(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSum(oddNumber);
console.log(oddNumberSum);