// Squares of a Sorted Array

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]Note:

// 1.) 1 <= A.length <= 10000
// 2.) -10000 <= A[i] <= 10000
// 3.) A is sorted in non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortedSquares = a => a.map(e => Math.pow(e, 2)).sort((num1, num2) => num1 - num2);

const arr1 = [-4, -1, 0, 3, 10];
const arr2 = [-7, -3, 2, 3, 11];

console.log(sortedSquares(arr1));
console.log(sortedSquares(arr2));