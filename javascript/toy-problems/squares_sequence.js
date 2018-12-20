// Squares sequence

// Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the
// previous number. If n is negative or zero, return an empty array/list.

// Examples
// squares(2,5)=[2,4,16,256,65536]
// squares(3,3)=[3,9,81]

const squares = (x, n) => {
	if (n <= 0) return [];

	let squared = x;
	let squaredArr = [ x ];

	for (let i = 0; i < n - 1; i++) {
		squaredArr.push((squared *= squared));
	}
	return squaredArr;
};

console.log(squares(2, 5));
// [2,4,16,256,65536]

console.log(squares(3, 3));
// [3,9,81]

console.log(squares(0, -4));

console.log(squares(1, -4));
