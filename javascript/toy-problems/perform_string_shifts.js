// Perform String Shifts
// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift).
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// Example 1:
// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation:
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"

// Example 2:
// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

/**
 * @param {string} str
 * @param {number[][]} shift
 * @return {string}
 */
function stringShift(str, shift) {
    const splitArr = str.split('');

    function handleShift(amount, dir) {
        let count = 0;

        if (dir === 'L') {
            while (count < amount) {
                const firstChar = splitArr.shift();

                splitArr.push(firstChar);
                str = splitArr.join('');
                count++;
            }
        } else if (dir === 'R') {
            while (count < amount) {
                const lastChar = splitArr.pop();

                splitArr.unshift(lastChar);
                str = splitArr.join('');
                count++;
            }
        }
    }

    for (let i = 0; i < shift.length; i++) {
        const direction = shift[i][0];
        const shiftAmount = shift[i][1];

        direction === 0
            ? handleShift(shiftAmount, 'L')
            : handleShift(shiftAmount, 'R');
    }
    return str;
}

const arr1 = [
    [0, 1],
    [1, 2],
];
// Output: "cab"
const arr2 = [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
];
// Output: "efgabcd"
console.log(stringShift('abc', arr1));
console.log(stringShift('abcdefg', arr2));

// Legend
// arg1
// 0 ==> left
// 1 ==> right
// arg2
// int ==> amount of shifts
