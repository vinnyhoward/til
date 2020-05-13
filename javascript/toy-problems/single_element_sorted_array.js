// Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:

// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: [3,3,7,7,10,11,11]
// Output: 10

// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} intArr
 * @return {number}
 */
function singleNonDuplicate(intArr) {
    let start = 0;
    let end = intArr.length - 1;

    if (intArr[0] !== intArr[1]) return intArr[0];
    if (intArr[end] !== intArr[end - 1]) return intArr[end];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (intArr[mid] !== intArr[mid - 1] && intArr[mid] !== intArr[mid + 1])
            return intArr[mid];

        if (
            (mid % 2 === 0 && intArr[mid] === intArr[mid + 1]) ||
            (mid % 2 !== 0 && intArr[mid] === intArr[mid - 1])
        ) {
            start = mid;
        } else end = mid;
    }
}

const arr1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
const arr2 = [3, 3, 7, 7, 10, 11, 11];

console.log(singleNonDuplicate(arr1)); // Output: 2
console.log(singleNonDuplicate(arr2)); // Output: 10
