// Word Search

// Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

// Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).

// Example:
// Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

// wordSearch("prince",text)--> true
// wordSearch("beautiful",text)--> true
// wordSearch("clown",text)--> false
// wordSearch("yellow",text)--> false
// wordSearch("akes the",text)--> false

const wordSearch = (word, text) => {
	let splitArr = text.split(' ');
	let wordMatch = splitArr.filter((elem) => elem.match(word));

	if (wordMatch.length >= 1) return true;
	return false;
};

// Better Answer
// function wordSearch(n){
//   return text.search("\\b"+n+"\\b")>-1
// }

const text = 'what makes the desert beautiful, said the little prince is that somewhere it hides a well';

console.log(wordSearch('prince', text));
// --> true
console.log(wordSearch('beautiful', text));
// --> true
console.log(wordSearch('clown', text));
// --> false
console.log(wordSearch('yellow', text));
// --> false
console.log(wordSearch('akes the', text));
// --> false
