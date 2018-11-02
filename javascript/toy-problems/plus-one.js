//  Plus One
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array
// contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */

const plusOne = (digits) => {
	let idx = digits.length;
	digits[idx - 1] += 1;
	let carry = digits[idx - 1] / 10;
	digits[idx - 1] = digits[idx - 1] % 10;

	for (let i = idx - 2; i >= 0; i--) {
		if (carry === 1) {
			digits[i] += 1;
			carry = digits[i] / 10;
			digits[i] = digits[i] % 10;
		}
	}

	if (carry === 1) {
		digits.unshift(1);
	}

	return digits;
};

var arr1 = [ 1, 2, 3 ];
var arr2 = [ 4, 3, 2, 1 ];
var arr3 = [ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3 ];
var arr4 = [ 9 ];

console.log(plusOne(arr1));
// Output: [1,2,4]
console.log(plusOne(arr2));
// Output: [4,3,2,2]
console.log(plusOne(arr3));
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne(arr4));
// Output: [1,0]
