// Happy Number

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of
// the squares of its digits, and repeat the process until the number equals
// 1 (where it will stay), or it loops endlessly in a cycle which does not
// include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example:

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

function isHappy(n) {
    if (n === 1) return true;
    let nextNum;

    function checkAndConvertInt(int) {
        if (int <= 4) return (nextNum = 0);

        if (int <= 9) {
            nextNum = int * int;
            return checkAndConvertInt(nextNum);
        }

        nextNum = int
            .toString()
            .split('')
            .reduce((a, elem) => a + elem * elem, 0);

        if (nextNum === 1) return;
        else checkAndConvertInt(nextNum);
    }

    checkAndConvertInt(n);
    return nextNum === 1 ? true : false;
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(5));
console.log(isHappy(29));
console.log(isHappy(5));
