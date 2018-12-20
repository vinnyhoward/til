// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative
// numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = (input) => {
	return input === undefined || !input || input.length == 0
		? []
		: [
				input.filter((n) => n > 0).length,
				input.filter((m) => m < 0).reduce((x, y) => {
					return x + y;
				}, 0)
			];
};

console.log(countPositivesSumNegatives([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ]));
// [(10, -65)];
console.log(countPositivesSumNegatives([ 0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14 ]));
// [8, -50]
