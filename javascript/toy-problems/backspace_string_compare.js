// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} firstStr
 * @param {string} secondStr
 * @return {boolean}
 */

function backspaceCompare(firstStr, secondStr) {
    function handleBackspaces(str = str.split('')) {
        const strArr = [];

        for (i = 0; i < str.length; i++) {
            if (str[i] !== '#') strArr.push(str[i]);
            if (str[i] === '#') strArr.pop(str[i]);
        }

        return strArr.join('');
    }

    return handleBackspaces(firstStr) === handleBackspaces(secondStr)
        ? true
        : false;
}

const stringOne1 = 'ab#c';
const stringTwo1 = 'ad#c';

const stringOne2 = 'ab##';
const stringTwo2 = 'c#d#';

const stringOne3 = 'a##c';
const stringTwo3 = '#a#c';

const stringOne4 = 'a#c';
const stringTwo4 = 'b';

console.log(backspaceCompare(stringOne1, stringTwo1));
// // true
console.log(backspaceCompare(stringOne2, stringTwo2));
// true
console.log(backspaceCompare(stringOne3, stringTwo3));
// // true
console.log(backspaceCompare(stringOne4, stringTwo4));
// // false
