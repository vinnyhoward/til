// Power

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
// This function should mimic the funtionality of `Math.pow()` - do not worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, --exponent);

// Alternative answers
// function power(base, exponent){
//   if(exponent === 0) return 1;
//   return base * power(base,exponent-1);
// }

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16
