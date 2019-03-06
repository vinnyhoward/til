// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also
// a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// String ends with?

const solution = (str, ending) => {
	const splitStr = str.split('');
	const endingLength = ending.split('').length;
	const strEnding = splitStr.slice(-endingLength);

	if (strEnding.length !== ending.length) return false;
	for (var i = 0; i < strEnding.length; i++) {
		if (strEnding[i] !== ending[i]) return false;
	}
	return true;
};

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
console.log(solution('abc', 'abcd'));

// Better Answers

function solutionAlt0(str, ending) {
	return str.substr(-ending.length) == ending;
}

function solutionAlt1(str, ending) {
	return str.endsWith(ending);
}
