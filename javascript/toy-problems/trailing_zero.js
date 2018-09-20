const zeros = (n) => {
	let count = 0;

	let x = 5;
	while (n / x >= 1) {
		count += parseInt(n / x);
		x *= 5;
	}

	return count;
};

console.log(zeros(0));
// 0, "Testing with n = 0"
console.log(zeros(6));
// "Testing with n = 6"
console.log(zeros(30));
// "Testing with n = 30"
console.log(zeros(12));

console.log(zeros(100));

console.log(zeros(972993331));
//243248325
