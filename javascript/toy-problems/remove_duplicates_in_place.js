// Remove Duplicates from Sorted Array II

// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,1,2,3,3],

// Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

// It doesn't matter what values are set beyond the returned length.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums == null) 0;
  if (nums.length <= 2) nums.length;

  let i = 1;
  let j = 2;

  while (j < nums.length) {
    if (nums[j] == nums[i] && nums[j] == nums[i - 1]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }

  return i + 1
}
const arr1 = [1, 1, 1, 2, 2, 3];
// Answer: 1, 1, 2, 2 and 3 
const arr2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// Answer: 0, 0, 1, 1, 2, 3 and 3

// console.log(removeDuplicates(arr1))

console.log(removeDuplicates(arr2))