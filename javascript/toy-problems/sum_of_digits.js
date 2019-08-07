// Sum of Digits / Digital Root

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a
// number. Given n, take the sum of the digits of n. If that 
// value has more than one digit, continue reducing in this way 
// until a single-digit number is produced. This is only 
// applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

// Solved it recursively
function digital_root(n) {
  let curNum = n;

  const findSumOfDigit = (num) => {
    if (num.toString().split('').length === 1) return;
    let numArray = num.toString().split('');

    curNum = numArray.reduce((cur, num) => parseInt(num) + cur, 0)

    findSumOfDigit(curNum.toString())
  };

  findSumOfDigit(curNum);

  return curNum;
}

// Better Answer
// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }

console.log(digital_root(6))
console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))