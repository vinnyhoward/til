const numJewelsInStones = (j, s) => {
	let jewelSplit = j.split('');
	let stoneSplit = s.split('');
	let count = 0;

	jewelSplit.forEach((jewel) =>
		stoneSplit.forEach((stone) => {
			if (jewel === stone) {
				count++;
			}
		})
	);

	return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
// // Output: 3
console.log(numJewelsInStones('z', 'ZZ'));
// // Output: 0
console.log(numJewelsInStones('Z', 'ZZ'));
// Output: 2
