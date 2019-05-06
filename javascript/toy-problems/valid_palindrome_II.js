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

// NEED TO FINISH
const validPalindrome = (s) => {
	if (s.split('').reverse().join('') === s) return true;
	let wordArr = s.split('');
	let count = 0;
	for (let i = 0; i < wordArr.length; i++) {
		const index = wordArr.indexOf(i);
		wordArr.splice(index, 1);

		console.log(wordArr);
	}
};

const input1 = 'aba';
const input2 = 'abca';

// console.log(validPalindrome(input1));
console.log(validPalindrome(input2));
