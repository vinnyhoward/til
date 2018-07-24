// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

let findSum = (n) => {
	var multipleArr = [];
	for (i = 0; i < n; i++) {
		if (i % 5 === 0 || i % 3 === 0) {
			multipleArr.push(i);
		}
	}
	if (i % 5 === 0) {
		multipleArr.push(i);
	}
	return multipleArr.reduce((a, b) => a + b, 0);
};
console.log(findSum(10));
// should return 33 (3 + 5 + 6 + 9 + 10)
