// Divide and Conquer

// Given a mixed array of number and string representations of integers, 
// add up the string integers and subtract this from the total of the 
// non-string integers.

function divCon(numArr) {
    let realInt = 0;
    let strInt = 0;
    numArr.forEach((num) => typeof num === 'number' ? realInt += num : strInt += parseInt(num, 10))

    return realInt - strInt;
}

console.log(divCon([9, 3, '7', '3'])) // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 14 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])) // 13