// Odds Index
// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

const oddBall = (arr) => {
	let idy = 0;

	arr.map((e, idx) => {
		if (e === 'odd') idy = idx;
	});

	let numArr = arr.filter((num) => {
		if (typeof num === 'number') return num;
	});

	return numArr.indexOf(idy) !== -1;
};

console.log(oddBall([ 'even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 10, 'odd', 3, 'even' ]));
console.log(oddBall([ 'even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 9, 'odd', 3, 'even' ]));
console.log(oddBall([ 'even', 10, 'odd', 2, 'even' ]));

// Better Answer
// function oddBall(arr){
//   return arr.some(e => arr[e] === 'odd');
// }
