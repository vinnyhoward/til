// Build a square

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

const generateShape = (int) => {
	return Array(int).fill(Array(int + 1).join('+')).join('\n');
};

console.log(generateShape(8));
