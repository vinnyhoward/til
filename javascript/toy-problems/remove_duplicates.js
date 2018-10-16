// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new
// length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra
// memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4
// respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the
// caller as well.

// Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// Works, because it returns new array it doesn't work
// const removeDuplicates = (n) => Array.from(new Set(n))

// Works, because it returns new array it doesn't work
// const removeDuplicates = (n) => n.filter((v, i, a) => a.indexOf(v) === i)

// Garbage and doesn't work lmao.
// const removeDuplicates = (n) => {
// 	n = n.sort();

// 	for (i = 0; i < n.length; i++) {
// 		if (n[i] === n[i + 1]) {
// 			n.splice(n[i], 1);
// 			continue;
// 		}
// 	}

// 	if (n.length === 2 && n[0] === n[1]) {
// 		n.pop();
// 	}

// 	return n;
// };

const removeDuplicates = (n) => {
	let i, j, cur, found;

	for (i = n.length - 1; i >= 0; i--) {
		cur = n[i];
		found = false;
		console.log(i - 1);
		for (j = i - 1; !found && j >= 0; j--) {
			if (cur === n[j]) {
				if (i !== j) {
					n.splice(i, 1);
				}
				found = true;
			}
		}
	}
	return n;
};

let num = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
let num1 = [ 1, 1, 1, 1 ];
let num2 = [ 1, 1, 2 ];
let num3 = [ 1, 2, 2, 2 ];
let num4 = [ 1, 2 ];

console.log(removeDuplicates(num));

console.log(removeDuplicates(num1));

console.log(removeDuplicates(num2));

console.log(removeDuplicates(num3));

console.log(removeDuplicates(num4));
