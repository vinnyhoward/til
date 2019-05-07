// Valid Palindrome II

// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = (s) => {
	const match = (i, j) => {
		console.log(i);
		console.log(j);
		while (i < j && s[i] === s[j]) {
			i++;
			j--;
		}
		return [ i, j ];
	};

	let [ i, j ] = match(0, s.length - 1);
	if (i >= j) return true;

	let [ x, y ] = match(i + 1, j);
	if (x >= y) return true;
	[ x, y ] = match(i, j - 1);
	if (x >= y) return true;

	return false;
};

// Runtime: 92 ms, faster than 91.09% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 42.6 MB, less than 78.26% of JavaScript online submissions for Valid Palindrome II.

const input1 = 'aba';
const input2 = 'abca'; // bca // aca // aba // abc

// console.log(validPalindrome(input1));
console.log(validPalindrome(input2));
