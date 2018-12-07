// First Unique Character in a String
// Go to Discuss
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (array) => {
	let splitArr = array.split('');
	var map = new Map();

	splitArr.forEach((a) => map.set(a, (map.get(a) || 0) + 1));
	let unique = splitArr.filter((a) => map.get(a) === 1)[0];

	return splitArr.indexOf(unique);
};

console.log(firstUniqChar('leetcode'));
// return 0.
console.log(firstUniqChar('loveleetcode'));
// return 2.
