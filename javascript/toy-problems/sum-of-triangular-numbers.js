const sumTriangularNumbers = (n) => {
	if (n <= 0) return 0;

	let count = 0;
	let numArr = [];

	while (count <= n) {
		var answer = count * (count + 1) / 2;
		numArr.push(answer);
		count++;
	}

	return numArr.reduce((x, y) => x + y);
};

//Better Answer
// function sumTriangularNumbers(n) {
//   return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
// }

console.log(sumTriangularNumbers(6));
//  56
console.log(sumTriangularNumbers(34));
//  7140
console.log(sumTriangularNumbers(-291));
//  0
console.log(sumTriangularNumbers(943));
//  140205240
console.log(sumTriangularNumbers(-971));
//  0
