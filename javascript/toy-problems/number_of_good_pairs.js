// https://leetcode.com/problems/number-of-good-pairs/

// Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    let identicalPairCount = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                identicalPairCount++;
            }
        }
    }
    return identicalPairCount;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
console.log(numIdenticalPairs([1, 1, 1, 1]));
// Output: 6
// Explanation: Each pair in the array are good.
console.log(numIdenticalPairs([1, 2, 3]));
// Input: nums = [1,2,3]
// Output: 0
