// Single Number

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

const singleNumber = (num) => {
	var numObj = {};

	num.forEach((int) => {
		if (!numObj[int]) numObj[int] = 0;
		numObj[int]++;
	});

	return Object.keys(numObj).filter((key) => {
		if (numObj[key] === 1) {
			return numObj[key]
		}
	})[0];
};

let arr1 = [ 2, 2, 1 ];
// Output: 1
let arr2 = [ 4, 1, 2, 1, 2 ];
// Output: 4
let arr3 = [ 4, 1, 2, 1, 2, 4, 4, 6, 7, 9, 5, 5, 7, 6, 9, 18 ];
// Output: 18

console.log(singleNumber(arr1));

console.log(singleNumber(arr2));

console.log(singleNumber(arr3));
