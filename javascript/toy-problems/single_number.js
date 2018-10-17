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
	let answer;

	num.forEach((x) => {
		if (!numObj[x]) numObj[x] = 0;
		numObj[x]++;
	});

	Object.keys(numObj).forEach((key) => {
		if (numObj[key] === 1) {
			answer = key;
		}
	});

	return parseInt(answer);
};

let arr1 = [ 2, 2, 1 ];
// Output: 1
let arr2 = [ 4, 1, 2, 1, 2 ];
// Output: 4
let arr3 = [ 4, 1, 2, 1, 2, 4, 4, 6, 7, 8, 9, 5, 5, 7, 6, 9, 18 ];
// Output: 18

console.log(singleNumber(arr1));

console.log(singleNumber(arr2));

console.log(singleNumber(arr3));
