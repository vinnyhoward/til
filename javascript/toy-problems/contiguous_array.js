// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} arr
 * @return {number}
 */
function findMaxLength(arr) {
    let counts = { 0: -1 };
    let count = 0;
    max = 0;
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] === 0 ? (count -= 1) : (count += 1);

        if (counts[count] != null) max = Math.max(max, i - counts[count]);
        else counts[count] = i;
    }
    return max;
}

console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1]));

// Legend
// 0: +1
// 1: -1

// [0,1,0]
// staring count = 0

// [0]
// count +1
// current count = 1

// [1]
// count -1
// current count = 0

// Create create hash and push if 0

// [0]
// count + 1
// current count = 1

// if no next iteration return;

// 2
