const calcType = (a, b, res) => {
	if (a + b === res) return 'addition';
	if (a - b === res) return 'subtraction';
	if (a * b === res) return 'multiplication';
	if (a / b === res) return 'division';
};

console.log(calcType(1, 2, 3));

console.log(calcType(10, 4, 40));

console.log(calcType(10, 5, 5));

console.log(calcType(10, 2, 5));
