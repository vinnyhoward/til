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
		altArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) altArr.push(arr[i].toUpperCase());
		if (i % 2 !== 0) altArr.push(arr[i]);
	}

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) altArr.push(arr[i].toUpperCase());
		if (i % 2 !== 0) altArr.push(arr[i]);
	}
};

console.log(capitalize('abcdef'));
// ['AbCdEf', 'aBcDeF'];
console.log(capitalize('codewars'));
// ['CoDeWaRs', 'cOdEwArS'];
console.log(capitalize('abracadabra'));
// ['AbRaCaDaBrA', 'aBrAcAdAbRa'];
console.log(capitalize('codewarriors'));
// ['CoDeWaRrIoRs', 'cOdEwArRiOrS'];
