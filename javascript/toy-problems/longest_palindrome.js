const longestPalindrome = (s) => {
	var re = /[\W_]/g;
	var lowRegStr = s.toLowerCase().replace(re, '');

	let splitArr = lowRegStr.split('');
	let tempWord = [];
	tempWord.push(splitArr[0]);

	for (i in splitArr) {
		if (tempWord[0] !== splitArr[i]) {
			tempWord.push(splitArr[i]);
		} else if (tempWord[0] === splitArr[i]) {
			tempWord.push(splitArr[i + 1]);
			console.log(tempWord);
		}
	}
};

// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('aa'));
// console.log(longestPalindrome('baa'));
// console.log(longestPalindrome('aab'));
// console.log(longestPalindrome('zyabyz'));
console.log(longestPalindrome('baabcd'));
// console.log(longestPalindrome('baablkj12345432133d'));
