/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (a) => {
	const even = [];
	const odd = [];

	a.map((n) => {
		if (n % 2 === 0) even.push(n);
		if (n % 2 !== 0) odd.push(n);
	});

	return [ ...even, ...odd ];
};

console.log(sortArrayByParity([ 3, 1, 2, 4 ]));
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
