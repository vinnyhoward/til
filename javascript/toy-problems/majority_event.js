// Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(numArr) {
    const numHash = {};
    let maxValue = 0;
    let majority = 0;

    numArr.forEach((int) => {
        if (!numHash[int]) numHash[int] = 0;
        numHash[int]++;
    });

    for (num in numHash) {
        if (numHash[num] > maxValue) {
            maxValue = numHash[num];
            majority = num;
        }
    }

    return majority;
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
