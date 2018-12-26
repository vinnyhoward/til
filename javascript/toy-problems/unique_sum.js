// Unique Sum

// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value
// appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// const uniqueSum = (lst) =>{
//   if(lst.length === 0 || lst === null) return null
//   let uniqueArr = Array.from(new Set(lst)).reduce((a, v) => {
//    return a + v
//   }, 0)
//   return uniqueArr
// }

const uniqueSum = (lst) => (lst.length > 0 ? [ ...new Set(lst) ].reduce((s, n) => s + n, 0) : null);

console.log(uniqueSum([ 1, 2, 3 ]), 6);
console.log(uniqueSum([ 1, 3, 8, 1, 8 ]), 12);
console.log(uniqueSum([ -1, -1, 5, 2, -7 ]), -1);
console.log(uniqueSum([]), null);
