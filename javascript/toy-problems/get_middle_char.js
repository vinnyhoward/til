// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
// return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to
//   an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to
//   worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// My Answer
// const getMiddle = (s) => {
// 	if (s.length == 1) return s;

// 	let splitWord = s.split('');
// 	let middle = splitWord.length / 2;

// 	if (s.length % 2 == 0) {
// 		return splitWord[Math.floor(middle - 1)] + splitWord[Math.floor(middle)];
// 	} else if (s.length % 2 != 0) {
// 		return splitWord[Math.floor(middle)];
// 	}
// };

// Best Answer

function getMiddle(s) {
	console.log(Math.ceil(s.length / 2 - 1));
	console.log(s.length % 2 === 0 ? 2 : 1);
	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Another good answer

// function getMiddle(s) {
//   var middle = s.length / 2;
//   return (s.length % 2)
//     ? s.charAt(Math.floor(middle))
//     : s.slice(middle - 1, middle + 1);
// }

console.log(getMiddle('test'));
// "es" 1, 2
console.log(getMiddle('testing'));
// "t" 3
console.log(getMiddle('middle'));
// "dd" 2, 3
console.log(getMiddle('A'));
// "A" 0
console.log(getMiddle('AssHoles'));
// "Ho"
