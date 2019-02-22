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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
	let start = 0;
	let stop = nums.length - 1;
	let middle = Math.floor((start + stop) / 2);

	while (nums[middle] !== target && start < stop) {
		if (target < nums[middle]) stop = middle - 1;
		if (target > nums[middle]) start = middle + 1;

		middle = Math.floor((start + stop) / 2);
	}
	return nums[middle] !== target ? -1 : middle;
};

const nums = [ -1, 0, 3, 5, 9, 12 ];
const target = 9;
// Output: 4
const nums1 = [ -1, 0, 3, 5, 9, 12, 14 ];
const target1 = 2;
// Output: -1
const nums2 = [ 2, 5 ];
const target2 = 5;

const nums3 = [ -1, 0, 3, 5, 9, 12 ];
const target3 = 12;

console.log(search(nums, target));
console.log(search(nums1, target1));
console.log(search(nums2, target2));
