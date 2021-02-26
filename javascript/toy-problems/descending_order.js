// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = (number) => parseInt([...number.toString()].map(Number).sort((f, s) => s - f).join(''))


console.log(descendingOrder(0)) // 0
console.log(descendingOrder(1)) // 1
console.log(descendingOrder(123456789)) // 987654321