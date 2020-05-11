// Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    for (var i = 0; i < num / 2 + 2; i++) {
        if (i * i == num) return true;
    }
    return false;
}

console.log(isPerfectSquare(16));
