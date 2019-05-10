// 1002. Find Common Characters

// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (charArr) => {
	const hashMap = {};

	for (let i = 0; i < charArr.length; i++) {
		let wordArr = charArr[i].split('');
		for (let j = 0; j < wordArr.length; j++) {
			if (!hashMap[wordArr[j]]) hashMap[wordArr[j]] = 0;
			hashMap[wordArr[j]]++;
		}
	}
	console.log(hashMap);
};

const input1 = [ 'bella', 'label', 'roller' ];
// Output: ["e","l","l"]
const input2 = [ 'cool', 'lock', 'cook' ];
// Output: ["c","o"]

console.log(commonChars(input1));
// Output: ["e","l","l"]
console.log(commonChars(input2));
// Output: ["c","o"]
