// Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number}
 */

//  solution 1
function subarraySum(numArr, k) {
    // set up length and return for base case
    let length = numArr.length;
    if (length === 0) return 0;

    // initialize variables to track sum, count, and index for iteration
    let curSum = 0;
    let i = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < length; i++) {
        curSum += numArr[i];
        let target = curSum - k;
        console.log(map);

        if (map.has(target)) count += map.get(target);
        
        if (!map.has(curSum)) map.set(curSum, 0);
        map.set(curSum, map.get(curSum) + 1);    
    }

    return count;
}

const arr1 = [1, 1, 1, 5];
const arr2 = [1, 1, 1, 2, 1, 1];

// console.log(subarraySum(arr1, 2)); // Output: 2
console.log(subarraySum(arr2, 2)); // Output: 4
// console.log(subarraySum(arr1, 3)); // Output: 1
// console.log(subarraySum(arr2, 4)); // Output: 3
