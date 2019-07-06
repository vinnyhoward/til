// recursiveRange

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0
// to the number passed to the function

// recursiveRange(6) // 21
// recursiveRange(10) // 55 

const recursiveRange = (num) => num !== 0 && num + recursiveRange(num - 1)

// Alternative Answer
// function recursiveRange(x){
//   if (x === 0 ) return 0;
//   return x + recursiveRange(x-1);
// }

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 
console.log(recursiveRange(6)); // 21
