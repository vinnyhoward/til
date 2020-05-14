// Remove K Digits
// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
    if (num.length <= k) return '0';
    let output = [];
    let i = 0;
    while (i < num.length) {
        while (
            output.length > 0 &&
            k > 0 &&
            output[output.length - 1] > num.charAt(i)
        ) {
            output.pop();
            k--;
        }
        if (!(num.charAt(i) === '0' && output.length === 0))
            output.push(num.charAt(i));
        i++;
    }
    for (let i = 0; i < k; i++) output.pop();
    return output.length > 0 ? output.join('') : '0';
}

console.log(removeKdigits('1432219', 3)); // Output: "1219"
console.log(removeKdigits('10200', 1)); // Output: "200"
console.log(removeKdigits('10', 2)); // Output: "0"
