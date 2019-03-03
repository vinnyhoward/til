// Floating-point Approximation (I)

// Consider the function

// f: x -> sqrt(1 + x) - 1 at x = 1e-15.

// We get: f(x) = 4.44089209850062616e-16

// or something around that, depending on the language.

// This function involves the subtraction of a pair of similar numbers when x is near 0 and the results are significantly
// erroneous in this region. Using pow instead of sqrt doesn't give better results.

// A "good" answer is 4.99999999999999875... * 1e-16.

// Can you modify f(x) to give a good approximation of f(x) in the neighbourhood of 0?

const f = (x) => x / (Math.sqrt(1 + x) + 1);

console.log(f(1.7e-15));
// 8.499999999999996e-16
console.log(f(2.1e-7));
// 1.0499999448750058e-07
console.log(f(4.6e-16));
// 2.3e-16
console.log(f(2.8e-13));
// 1.3999999999999021e-13
console.log(f(1.7e-15));
// 8.499999999999996e-16
