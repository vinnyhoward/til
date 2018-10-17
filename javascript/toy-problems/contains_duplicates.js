// Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every
// element is distinct

// Example 1:
// Input: [1,2,3,1]
// Output: true
// Example 2:

//Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Works, but its a double for loop and doesn't fit time complexity
// const containsDuplicate = (num) => {
// 	let count = 0;

// 	for (x in num) {
// 		for (y in num) {
// 			if (y !== x) {
// 				if (num[x] == num[y]) {
// 					count++;
// 				}
// 				if (count > 1) {
// 					return true;
// 				}
// 			}
// 		}
// 	}
// 	return false;
// };

const containsDuplicate = (num) => {
	var numObj = {};

	num.forEach((x) => {
		if (!numObj[x]) numObj[x] = 0;
		numObj[x]++;
		console.log(numObj);
	});

	for (var y in numObj) {
		if (numObj[y] > 1) return true;
	}
	return false;
};

let arr1 = [ 1, 2, 3, 1 ];
// Output: true
let arr2 = [ 1, 2, 3, 4 ];
// // Output: false
let arr3 = [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ];
// // Output: true
let arr4 = [ 3, 3 ];

console.log(containsDuplicate(arr1));

console.log(containsDuplicate(arr2));

console.log(containsDuplicate(arr3));

console.log(containsDuplicate(arr4));
