// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (n) => {
	let phoneNumber = '';
	for (let i = 0; i < n.length; i++) {
		if (i == 0) phoneNumber += '(';
		if (i <= 2) phoneNumber += n[i].toString();
		if (i == 2) phoneNumber += ') ';

		if (i < 6 && i > 2) phoneNumber += n[i].toString();
		if (i == 5) phoneNumber += '-';
		if (i >= 6) phoneNumber += n[i].toString();
	}
	return phoneNumber;
};
console.log(createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]));
// "(123) 456-7890"

// Better Answer

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') '
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }
