// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the
// result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!

// My Answer
const count = (string) => {
	if (string == '') return {};

	let countObj = new Object();
	let splitStr = string.split('');
	var uniqueArray = splitStr.filter((idx, val) => splitStr.indexOf(idx) == val);

	for (val in uniqueArray) {
		var tempKey = uniqueArray[val];
		var filterCharCount = splitStr.filter((item) => tempKey == item);

		Object.assign(countObj, { [tempKey]: filterCharCount.length });
	}

	return countObj;
};

console.log(count('aba'));
// { a: 2, b: 1 }
console.log(count(''));
// {}

// Better Answer
// function count (string) {
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }
