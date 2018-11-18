// Two Sum
// Go to Discuss
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numArray, sum) => {
	var pairs = [];
	var hashTable = [];

	for (var i = 0; i < numArray.length; i++) {
		var currNum = numArray[i];
		var counterpart = sum - currNum;

		if (hashTable.indexOf(counterpart) !== -1) {
			var counterPartIdx = hashTable.indexOf(counterpart);
			pairs.push(counterPartIdx, i);
		}

		hashTable.push(currNum);
	}

	return pairs;
};

let arr1 = [ 2, 7, 11, 15 ];
let targetNum1 = 9;
let arr2 = [ 3, 2, 3 ];
let targetNum2 = 6;

console.log(twoSum(arr1, targetNum1));
// return [0, 1].
console.log(twoSum(arr2, targetNum2));
// return [0, 2].
