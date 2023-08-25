// function isLeapYear(year){
//     const reminder = year % 4;
//     if(reminder === 0){
//         // console.log('it is leap year')
//         return true;
//     }
//     else{
//         // console.log('it is not leap year');
//         return false;
//     }
// }
function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        // console.log('it is leap year')
        return true;
    }
    else{
        // console.log('it is not leap year');
        return false;
    }
}
const myYear = isLeapYear(1953);
console.log(myYear);
const yourYear = isLeapYear(1952);
console.log(yourYear);


// practice
function findLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const array1 = findLeapYear(2023);
console.log(array1);
const array2 = findLeapYear(2024);
console.log(array2);
const array3 = findLeapYear(2025);
console.log(array3);
const array4 = findLeapYear(2028);
console.log(array4);
const array5 = findLeapYear(2030);
console.log(array5);