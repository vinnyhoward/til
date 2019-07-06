// fib

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (idx) => idx < 3 ? 1 : fib(idx - 1) + fib(idx - 2);

// Alternative Answer
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
