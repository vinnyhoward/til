// Kebabize

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

const kebabize = (str) => {
	const strArr = str.split('').filter((e) => isNaN(e));
	const strLength = strArr.length;
	const kebabCase = [];

	for (let i = 0; i < strLength; i++) {
		let letter = strArr[i];
		if (letter === letter.toUpperCase() && i !== 0) {
			kebabCase.push(`-${letter.toLowerCase()}`);
		} else if (isNaN(letter)) kebabCase.push(letter.toLowerCase());
	}

	return kebabCase.join('');
};

console.log(kebabize('camelsHaveThreeHumps'));
console.log(kebabize('1camelsHave3Humps'));
console.log(kebabize('2LUog'));

// Better Answer
// function kebabize(str) {
// 	return str
// 		.replace(/[^a-z]/gi, '')
// 		.replace(/^[A-Z]/, (c) => c.toLowerCase())
// 		.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
// }
