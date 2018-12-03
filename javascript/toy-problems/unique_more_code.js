// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as
// follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example,
// "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a
// concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	let morseRef = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..'
	];
	let alpha = [ ...Array(26) ].reduce((a) => a + String.fromCharCode(i++), '', (i = 97)).split('');
	let converted = [];

	for (idx in words) {
		let split = words[idx].split('');
		var morseWord = [];

		for (idy in split) {
			let alphaIndex = alpha.indexOf(split[idy]);
			morseWord.push(morseRef[alphaIndex]);
		}

		let word = morseWord.join('');
		converted.push(word);
	}
	return [ ...new Set(converted) ].length;
};

let words1 = [ 'gin', 'zen', 'gig', 'msg' ];

console.log(uniqueMorseRepresentations(words1));
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// Better solution submitted by someone else that beats 100% of submissions
var uniqueMorseRepresentationsv2 = function(words) {
	var t = {
		a: '.-',
		b: '-...',
		c: '-.-.',
		d: '-..',
		e: '.',
		f: '..-.',
		g: '--.',
		h: '....',
		i: '..',
		j: '.---',
		k: '-.-',
		l: '.-..',
		m: '--',
		n: '-.',
		o: '---',
		p: '.--.',
		q: '--.-',
		r: '.-.',
		s: '...',
		t: '-',
		u: '..-',
		v: '...-',
		w: '.--',
		x: '-..-',
		y: '-.--',
		z: '--..'
	};

	//return (words.map(   w=>w.split('').map(c => t[c]).join('')   )).filter((v,k,self) => self.indexOf(v) == k).length;
	return words
		.map((w) => w.split('').reduce((total, letter) => total + t[letter], ''))
		.filter((v, k, self) => self.indexOf(v) == k).length;
};

console.log(uniqueMorseRepresentationsv2(words1));
