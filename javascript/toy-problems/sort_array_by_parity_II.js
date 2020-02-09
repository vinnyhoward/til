// Sort Array By Parity II


// Given an array A of non-negative integers, half of the integers in A are odd, 
//and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and
// whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Note:

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = (a) => {

}

// 4 => even index; even number 
// 2 => odd index; even number 
// 5 => even index; odd number 
// 7 => odd index; odd number
const arr1 = [4,2,5,7];
const arr2 = [2,3];
const arr3 = [4,1,2,1];

// 4 => even index; even number 
// 5 => odd index; odd number 
// 2 => even index; even number 
// 7 => odd index; odd number
// Output: [4,5,2,7]

// 2 => odd index; even number 
// 5 => even index; odd number 
// 4 => even index; even number 
// 7 => odd index; odd number
// Output: [2,5,4,7]

// 2 => odd index; even number 
// 7 => odd index; odd number
// 4 => even index; even number 
// 5 => even index; odd number 
// Output: [2,7,4,5]

console.log(sortArrayByParityII(arr1))
console.log(sortArrayByParityII(arr2))
console.log(sortArrayByParityII(arr3))
