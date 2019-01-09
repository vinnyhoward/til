// Alternate capitalization

// Instructions
// Output
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

const capitalize = (s) => {
	let arr = [ ...s ],
		evenWord = [],
		oddWord = [],
		altArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) evenWord += arr[i].toUpperCase();
		if (i % 2 !== 0) evenWord += arr[i];
	}

	for (let j = 0; j < arr.length; j++) {
		if (j % 2 !== 0) oddWord += arr[j].toUpperCase();
		if (j % 2 === 0) oddWord += arr[j];
	}

	altArr.push(evenWord, oddWord);

	return altArr;
};

// Better Answer
// function capitalize(s){
//   return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
//           [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
// }

console.log(capitalize('abcdef'));
// ['AbCdEf', 'aBcDeF'];
console.log(capitalize('codewars'));
// ['CoDeWaRs', 'cOdEwArS'];
console.log(capitalize('abracadabra'));
// ['AbRaCaDaBrA', 'aBrAcAdAbRa'];
console.log(capitalize('codewarriors'));
// ['CoDeWaRrIoRs', 'cOdEwArRiOrS'];
