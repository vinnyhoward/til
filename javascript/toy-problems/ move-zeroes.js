// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let arr1 = [ 0, 0, 1, 0, 3, 12 ];
let arr2 = [ 0, 0, 1 ];
let arr3 = [ 0, 0, 1, 0, 1, 0, 1 ];
let arr4 = [ 0, 1, 0, 3, 12 ];

// This  version doesn't work for the problem since it makes a copy of the array
// and doesn't move it in place, BUT it still works
const moveZeroesV1 = (num) => {
	let zeroArr = num.filter((num) => num === 0);
	let numArr = num.filter((num) => num !== 0);

	return [ ...numArr, ...zeroArr ];
};

console.log(moveZeroesV1(arr1));
console.log(moveZeroesV1(arr2));
console.log(moveZeroesV1(arr3));
console.log(moveZeroesV1(arr4));

// This version moves it in place
const moveZeroesV2 = (num) => {
	for (let i = num.length - 1; i >= 0; i--) {
		if (num[i] === 0) {
			var foundZero = num.splice(i, 1).indexOf(0);
			num.push(foundZero);
		}
	}
	return num;
};

console.log(moveZeroesV2(arr1));
console.log(moveZeroesV2(arr2));
console.log(moveZeroesV2(arr3));
console.log(moveZeroesV2(arr4));
