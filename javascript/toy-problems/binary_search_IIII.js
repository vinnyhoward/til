// Binary Search

// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search
// target in nums. If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

// 3 Parts of a Successful Binary Search
// Binary Search is generally composed of 3 main sections:

// Pre-processing - Sort if collection is unsorted.
// Binary Search - Using a loop or recursion to divide search space in half after each comparison.
// Post-processing - Determine viable candidates in the remaining space.

// Questions to consider when implementing a Binary Search

// Why was it implemented slightly differently?
// What was the developer thinking?
// Which way was easier?
// Which way is better?

// Last of the binary search problems. Trying to get it down without any help

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const binarySearch = (arr, target) => {
  // Beginning of the sorted array
  let start = 0;
  // Last integer of the array
  let stop = arr.length - 1;
  // Middle element of the array based on "stop" and "start"
  let mid = Math.floor((stop + start) / 2);

  // Check if arr !== target AND min < start
  while (start < stop && arr[mid] !== target) {
    // Assign current element
    let currElement = arr[mid];

    if (target < currElement) stop = mid - 1;
    if (target > currElement) start = mid + 1;

    // Divide array in half
    mid = Math.floor((start + stop) / 2);
  }
  return arr[mid] !== target ? -1 : mid;
};

const arr = [ -1, 0, 3, 5, 9, 12 ];
const target = 9;
// Output: 4
const arr1 = [ -1, 0, 3, 5, 9, 12, 14 ];
const target1 = 2;
// Output: -1
const arr2 = [ 2, 5 ];
const target2 = 5;

const arr3 = [ -1, 0, 3, 5, 9, 12 ];
const target3 = 12;

console.log(binarySearch(arr, target));
console.log(binarySearch(arr1, target1));
console.log(binarySearch(arr2, target2));
console.log(binarySearch(arr3, target3));
