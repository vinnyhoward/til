/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (charArr) => {
	const hashMap = {};
	const commonChars = [];

	charArr.map((words) =>
		words.split('').forEach((chars) => {
			if (!hashMap[chars]) hashMap[chars] = 0;
			hashMap[chars]++;
		})
	);
	console.log(hashMap);
	Object.keys(hashMap).filter((key) => {
		commonChars[key] = hashMap[key] % charArr.length;
	});

	return commonChars;
};

const input1 = [ 'bella', 'label', 'roller' ];
// Output: ["e","l","l"]

const input2 = [ 'cool', 'lock', 'cook' ];
// Output: ["c","o"]

console.log(commonChars(input1));
// Output: ["e","l","l"]

console.log(commonChars(input2));
// Output: ["c","o"]

// Pre-Pseudo Code

// How to split up array of words to check common chars

// How to find common chars and compare against

// Pseudo Code

// Map through array of words

// After each element split element into separate chars
