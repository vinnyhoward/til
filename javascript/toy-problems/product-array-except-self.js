// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of
// all the elements of nums except nums[i].

// Example:

// Input: [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of
// space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const productExceptSelf = (nums) => {
// 	let productArr = [];

// if(nums.length === 2) {
//   let temp = nums[1]
//   nums[1] = nums[0]
//   nums[0] = temp

//   return nums
// }

// 	for (let i = 1; i < nums.length + 1; i++) {
// 		let sum = nums.filter((num) => {
//       let sumOfNum = num !== i
//       console.log(sumOfNum);
//       return sumOfNum
//     }).reduce((a, b) => {
//       let product = a * b
//       console.log(product)
//       return product
//     });
// 		productArr.push(sum);
// 	}

// 	return productArr;
// };

const productExceptSelf = (numbers) => {
	const firstZeroIdx = numbers.indexOf(0);
	console.log(firstZeroIdx);
	const secondZeroIdx = numbers.slice(firstZeroIdx + 1).indexOf(0);
	console.log(secondZeroIdx);
	const containsZero = firstZeroIdx !== -1;
	const containsMultipleZeros = secondZeroIdx !== -1;

	let res;

	if (containsMultipleZeros) {
		res = numbers.map((_) => 0);
	} else {
		const product = numbers.reduce((acc, val) => acc * (val || 1), 1);

		if (containsZero) {
			res = numbers.map((val) => (val === 0 ? product : 0));
		} else {
			res = numbers.map((val) => product / val);
		}
	}

	return res;
};

let arr1 = [ 1, 2, 3, 4 ];
// Output: [24,12,8,6]
let arr2 = [ 9, 0, -2 ];
// Output: [0,-18,0]

// console.log(productExceptSelf(arr1));
console.log(productExceptSelf(arr2));
