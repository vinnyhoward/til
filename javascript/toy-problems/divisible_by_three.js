// By 3, or not by 3? That is the question . . .

// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing values greater than 0.

// Example:

// divisibleByThree('123') // true
// divisibleByThree('8409') // true
// divisibleByThree('100853') // false
// divisibleByThree('33333333') // true
// divisibleByThree('7') // false

const divisibleByThree = (s) => [...s].reduce((a, b) => a + b, 0) % 3 === 0 ? true : false;

console.log(divisibleByThree('123')); 
// true, "Should return true if the sum of the given digits is divisible by 3."
console.log(divisibleByThree('19254'));
// true, "Should return true if the sum of the given digits is divisible by 3."
console.log(divisibleByThree('88'));
// false, "Should return false if the sum of the given digits is not divisible by 3."
console.log(divisibleByThree('1')); 
// false, "Should return false if the sum of the given digits is not divisible by 3."