const solve = (n) => {
	var x = '0';
	var y = '1';

	if (n == 0) {
		return '0';
	} else if (n == 1) {
		return '01';
	} else {
		return solve();
	}
};

console.log(solve(0));
('0');
console.log(solve(1));
('01');
console.log(solve(2));
('010');
console.log(solve(3));
('01001');
console.log(solve(5));
('0100101001001');
