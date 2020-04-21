// Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

function search(nums, target) {
    let BST = (lo, hi) => {
        if (lo > hi) return -1;

        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (
            (nums[lo] <= target && target < nums[mid]) || // target is in left side
            (nums[mid] < nums[hi] && // right side is sorted
                !(nums[mid] < target && target <= nums[hi])) // target is not in right side
        ) {
            return BST(lo, mid - 1);
        } else {
            return BST(mid + 1, hi);
        }
    };
    return BST(0, nums.length - 1);
}

const nums = [4, 5, 6, 7, 0, 1, 2];

console.log(search(nums));
