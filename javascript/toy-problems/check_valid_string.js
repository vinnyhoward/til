// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True

// Note:
// The string size will be in the range [1, 100].

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(str) {
    if (!str) return true;

    let stack = [],
        left = 0,
        right = 0,
        length = str.length,
        star = 0;

    for (let i = 0; i < length; i++) {
        if (str[i] === '(') {
            left++;
            stack.push(true);
        } else if (str[i] === ')') {
            right++;
            console.log(star);
            if (star + left < right) {
                return false;
            }
            stack.pop();
        } else if (str[i] === '*') {
            star++;
            stack.pop();
        }
    }

    if (stack.length === 0) return true;
    return false;
}
const str1 = '()';
const str2 = '(*)';
const str3 = '(*))';
const str4 = ')(';

// console.log(checkValidString(str1)); // Output: true
// console.log(checkValidString(str2)); // Output: true
console.log(checkValidString(str3)); // Output: true
console.log(checkValidString(str4)); // Output: false
// console.log(checkValidString(' ')); // Output: true
// console.log(checkValidString('(')); // Output: false
