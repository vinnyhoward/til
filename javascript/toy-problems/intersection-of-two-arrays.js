// Intersection of Two Arrays II

// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: num1 = [1,2,2,1], num2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: num1 = [4,9,5], num2 = [9,4,9,8,4]
// Output: [4,9]

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if num1's size is small compared to num2's size? Which algorithm is better?
// What if elements of num2 are stored on disk, and the memory is limited such that you cannot load all elements into the
// memory at once?

// /**
//  * @param {number[]} num1
//  * @param {number[]} num2
//  * @return {number[]}
//  */
const intersect = (arr1, arr2) => arr1.filter((type) => arr2.includes(type));

let arr1 = [ 1, 2, 2, 1 ];
let arr2 = [ 2, 2 ];
// Output: [2,2]

let arr3 = [ 4, 9, 5 ];
let arr4 = [ 9, 4, 9, 8, 4 ];
// Output: [4,9]

let arr5 = [ 1, 2, 2, 1 ];
let arr6 = [ 2 ];
// Output: [2]

let arr7 = [ 1 ];
let arr8 = [ 1 ];
// Output: [1]

let arr9 = [ 1 ];
let arr10 = [ 1, 1 ];
// Output: [1]

let arr11 = [ 3, 1, 2 ];
let arr12 = [ 1 ];
// Output: [1]

console.log(intersect(arr1, arr2));
// Output: [2,2]
console.log(intersect(arr3, arr4));
// // Output: [4,9]
console.log(intersect(arr5, arr6));
// // Output: [2]
console.log(intersect(arr7, arr8));
// // Output: [1]
console.log(intersect(arr9, arr10));
// // Output: [1]
console.log(intersect(arr11, arr12));
// Output: [1]
