// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

const makePassword = (phrase) => {
	let word = phrase.split(' ');
	let wLength = word.length;

	let password = [];

	for (let i = 0; i < wLength; i++) {
		let curWord = word[i];
		let splitCur = curWord.split('');
		let firstLetter = splitCur.slice(0, 1)[0];
		let checkLetter = firstLetter.toLowerCase();
		if (checkLetter === 'i') firstLetter = 1;
		if (checkLetter === 'o') firstLetter = 0;
		if (checkLetter === 's') firstLetter = 5;

		password.push(firstLetter);
	}
	return password.join('');
};

console.log(makePassword('Give me liberty or give me death'));
// "Gml0gmd"
console.log(makePassword('Keep Calm and Carry On'));
// "KCaC0"

// Better answer
// function makePassword(phrase) {
//   return phrase
//     .split(' ')
//     .map(s => s[0])
//     .join('')
//     .replace(/i/ig, '1')
//     .replace(/o/ig, '0')
//     .replace(/s/ig, '5');
// }
