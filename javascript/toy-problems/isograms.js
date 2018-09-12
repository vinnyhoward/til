const isIsogram = (str) => {
	if (str == '') return true;
	var splitIso = str.split('');
	var repeat = 0;

	for (let i = 0; i < splitIso.length; i++) {
		for (let j = 0; j < splitIso.length; j++) {
			if (splitIso[i].toLowerCase() === splitIso[j].toLowerCase() && i != j) {
				repeat++;
			}
		}
	}
	return repeat > 0 ? false : true;
};

console.log(isIsogram('Dermatoglyphics'));
// true
console.log(isIsogram('isogram'));
// true
console.log(isIsogram('aba'));
// false, 'same chars may not be adjacent'
console.log(isIsogram('moOse'));
// // false, 'same chars may not be same case'
console.log(isIsogram('isIsogram'));
// //  false;
console.log(isIsogram(''));
//  true, 'an empty string is a valid isogram'
console.log(isIsogram('moose'));
