// Factorial

// Write a function called factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all integers below it. For example, (4!) is equal to 24, because
// 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = (num) => num === 0 ? 1 : num * factorial(--num);

// Alternative answer
// function factorial(x){
//   if (x < 0 ) return 0;
//   if (x <= 1 ) return 1;
//   return x * factorial(x-1);
// }

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

