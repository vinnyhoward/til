// Sum of the first nth term of Series

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

const SeriesSum = (n) => {
	for (var s = 0, i = 0; i < n; i++) {
		s += 1 / (1 + i * 3);
	}

	return s.toFixed(2);
};

console.log(SeriesSum(1), 'Answer: 1.00');
console.log(SeriesSum(2), 'Answer: 1.25');
console.log(SeriesSum(3), 'Answer: 1.39');
console.log(SeriesSum(4), 'Answer: 1.49');
